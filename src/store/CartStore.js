import Cart from "../model/cart/Cart";
import CartBD from "../model/cart/CartBD";
import Coupon from "../model/cart/Coupon";

class CartStore {

    static #cartStore = new Cart();

    static get(){
        try {
            if(!this.#cartStore.products.length){
                try {
                    const [CartDatabase] = CartBD.get();
                    
                    CartDatabase.products.forEach(product => {
                        this.addProductStore(product.id, product.quantidade, true, false);
                    });
                    this.#cartStore.amount = CartDatabase.amount;
                    if(CartDatabase.coupon){
                        (async () => {
                            await this.#cartStore.addCoupon(CartDatabase.coupon.name);
                            document.dispatchEvent(new CustomEvent('updatedPrices',
                                {
                                    detail: this.#cartStore.amount
                                }
                            ))
                        })()  
                    }
                    document.dispatchEvent(new CustomEvent('updatedPrices',
                        {
                            detail: this.#cartStore.amount
                        }
                    ))
                    return this.#cartStore;
                } catch (e) {
                    return false;
                }
            } else {
                return this.#cartStore
            }
        } catch (e) {
            console.error(e)
        }
    }

    static async addProductStore(productID, quantidade = 1, isIncrease = true, insertStoreAmount = true){
        await this.#cartStore.productsAddRemoveQtd(productID, quantidade, isIncrease, insertStoreAmount);
        document.dispatchEvent(new CustomEvent('updatedPrices',
        {
            detail: this.#cartStore.amount
        }));
    }

    static addProduct(productID, quantidade = 1, isIncrease = true){
        try {
            (async () => {
                await this.addProductStore(productID, quantidade, isIncrease);
                CartBD.save(this.#cartStore);
            })()
        } catch (error) {
            throw error
        }
    }

    static async delProduct(productID){
        try {
                await this.#cartStore.productsRemove(productID);
                
                if(this.#cartStore.products.length){
                    CartBD.save(this.#cartStore);
                    document.dispatchEvent(new CustomEvent('updatedPrices',{
                        detail: this.#cartStore.amount
                    }));
                    return true;
                } else {
                    CartBD.delete();
                    return false;
                }
                
            
        } catch (error) {
            throw error
        }
    }

    static async addCoupon(name){
        try {
            const responseCoupon = await this.#cartStore.addCoupon(name);
            document.dispatchEvent(new CustomEvent('updatedPrices',{
                detail: this.#cartStore.amount
            }));
            CartBD.save(this.#cartStore); 
            return responseCoupon;
        } catch (error) {
            throw error
        }
    }

    static payment(){
        try {
            return CartBD.payment(this.#cartStore);
        } catch (error) {
            throw error
        }
    }

}

export default CartStore;