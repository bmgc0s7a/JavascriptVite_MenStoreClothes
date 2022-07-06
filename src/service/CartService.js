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

    static payment(cartObj){
        try {
            const CartObjPayment = [];
            if(cartObj.coupon) CartObjPayment.coupon = cartObj.coupon.code;
            CartObjPayment.amout = cartObj.amout;
            CartObjPayment.products = cartObj.products;
            return PaymentAPI.send(CartObjPayment);
        } catch (error) {
            throw error
        }
    }
}

export default CartService;