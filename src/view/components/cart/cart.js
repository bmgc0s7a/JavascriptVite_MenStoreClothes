import { title } from "./title.js";
import { coupon } from "./coupon.js";
import { payment } from "./payment.js";
import { itemCart } from "./itemCart.js";


function cart() {

    const divCart = document.createElement("div");
    const divTitleItem = document.createElement("div");
    const divCouponPayment = document.createElement("div");


    divTitleItem.append(title(),itemCart())
    divCouponPayment.append(coupon(),payment());

    divCart.classList.add('flex', 'flex-col','lg:flex-row','justify-between');
    divCart.append(divTitleItem,divCouponPayment)

    return divCart;
}

export {cart}