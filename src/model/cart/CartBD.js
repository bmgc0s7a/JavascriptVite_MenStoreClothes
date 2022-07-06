import CartService from "../../service/CartService";
import CouponService from "../../service/CouponService";
import CartJSON from "./CartJSON";

class CartBD {

    static get(){
        try {
            return CartService.get();
        } catch(e) {
            throw e;
        }
    }

    static async valCoupon(coupon){
        try {
            const [data, response] = await CouponService.get(coupon);
            if(response){
                return [data, response];
            }
            return [data.message, response];
        } catch (e){
            throw e;
        }
    }

    static save(cartInstance){
        try {
            const CartObj = CartJSON.convert(cartInstance);
            CartService.save(CartObj);
        } catch (e) {
            throw e;
        }
    }

    static delete(){
        try {
            CartService.delete();
        } catch (e) {
            throw e;
        }
    }

    static payment(cartInstance){
        const CartObj = CartJSON.convert(cartInstance);
        return CartService.payment(CartObj);
    }
}
export default CartBD;