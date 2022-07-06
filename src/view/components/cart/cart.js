import { title } from "./title.js";
import { coupon } from "./coupon.js";
import { payment } from "./payment.js";
import { itemCart } from "./itemCart.js";
import CartStore from "../../../store/CartStore.js";
import { p } from "../widgets/p.js";


function cart() {

    const divCart = document.createElement("div");
    const divTitleItem = document.createElement("div");
    const divCouponPayment = document.createElement("div");
    const empty = p('Your cart is empty!')
    const divItems = document.createElement("div");
    const itemsDB = CartStore.get()


    divCouponPayment.append(coupon(), payment());
    divCart.append(empty)
    if (!itemsDB) {
        divTitleItem.classList.add('hidden')
        divCouponPayment.classList.add('hidden')
        empty.id = "cart-empty"

    } else {
        empty.classList.add('hidden')
        itemsDB.products.forEach(product => {
            divItems.append(itemCart(product))
        });
    }

    divTitleItem.append(title(), divItems)

    document.addEventListener('cartEmpty', function () {
        divTitleItem.classList.add('hidden')
        divCouponPayment.classList.add('hidden')
        empty.classList.remove('hidden')
    })

    document.addEventListener('productAdd', function () {
        if (divTitleItem.classList.contains('hidden')) {
            divTitleItem.classList.remove('hidden')
            divCouponPayment.classList.remove('hidden')
            empty.classList.add('hidden')
        }
    })

    divCart.classList.add('flex', 'flex-col', 'lg:flex-row', 'justify-between');
    divCart.append(divTitleItem, divCouponPayment)

    return divCart;
}

export { cart }