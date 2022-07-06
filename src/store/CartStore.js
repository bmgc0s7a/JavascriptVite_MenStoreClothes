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

    static addProduct(productID, quantidade){
        try {
            this.addProductStore(productID, quantidade);
            CartBD.save(this.#cartStore);
        } catch (error) {
            throw error
        }
    }

    static delProduct(productID){
        try {
            this.#cartStore.productsRemove(productID);
            CartBD.save(this.#cartStore);
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