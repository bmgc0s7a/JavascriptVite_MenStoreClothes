import PaymentAPI from "./api/PaymentAPI";
import Database from "./database/Database";

class CartService {

    static #bd = Database.init();

    static get(){
        try {
            return this.#bd.get('cart');
        } catch (error) {
            throw error;
        }
    }

    static save(cartObj){
        try {
            this.#bd.delAll('cart');
            this.#bd.add('cart', cartObj);
        } catch (e) {
            throw e;
        }
    }

    static delete (){
        try {
            this.#bd.delAll('cart');
        } catch (e) {
            throw e;
        }
    }

    static payment(cartObj){
        try {
            return PaymentAPI.send(cartObj);
        } catch (error) {
            throw error
        }
    }
}

export default CartService;