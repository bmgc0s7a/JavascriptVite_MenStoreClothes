import Cart from "../model/cart/Cart";
import CartBD from "../model/cart/CartBD";

class CartStore {

    static #cartStore = new Cart();

    static get(){
        try {
            if(!this.#cartStore.products.length){
                try {
                    const [CartDatabase] = CartBD.get();
                    if(CartDatabase.coupon) this.#cartStore.coupon = CartDatabase.coupon
                    CartDatabase.products.forEach(product => {
                        this.addProductStore(product.id, product.quantidade, true, false);
                    });
                    this.#cartStore.amount = CartDatabase.amount;
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

    static addProductStore(productID, quantidade = 1, isIncrease = true, insertStoreAmount = true){
        this.#cartStore.productsAddRemoveQtd(productID, quantidade, isIncrease, insertStoreAmount);
    }

    static addProduct(productID, quantidade = 1, isIncrease = true){
        try {
            this.addProductStore(productID, quantidade, isIncrease);
            CartBD.save(this.#cartStore);
        } catch (error) {
            throw error
        }
    }

    static async delProduct(productID){
        try {
                await this.#cartStore.productsRemove(productID);
                if(this.#cartStore.products.length){
                    CartBD.save(this.#cartStore);
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
            await this.#cartStore.addCoupon(name);
            CartBD.save(this.#cartStore); 
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