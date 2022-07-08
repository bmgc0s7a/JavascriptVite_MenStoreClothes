import { title } from "./title.js";
import { coupon } from "./coupon.js";
import { payment } from "./payment.js";
import { itemCart } from "./itemCart.js";
import CartStore from "../../../store/CartStore.js";
import { divEmptyCart } from "./EmptyCart.js";


function cart() {


    const divCart = document.createElement("div");
    const divTitleItem = document.createElement("div");
    const divCouponPayment = document.createElement("div");
    const divItems = document.createElement("div");
    const itemsDB = CartStore.get()

    const hideItems = function (isHidden = true) {
        if (isHidden) {
            divTitleItem.classList.add('hidden')
            divCouponPayment.classList.add('hidden')
            divCartEmpty.classList.remove('hidden')
            divCart.classList.remove('justify-between')
            divCart.classList.add('justify-center')
        }
        else {
            if (divTitleItem.classList.contains('hidden')) {
                divTitleItem.classList.remove('hidden')
                divCouponPayment.classList.remove('hidden')
                divCartEmpty.classList.add('hidden')
                divCart.classList.add('justify-between')
                divCart.classList.remove('justify-center')
            }
        }
    }

    divCart.classList.add('flex', 'flex-col', 'lg:flex-row', 'justify-between');

    const divCartEmpty = divEmptyCart()

    divCouponPayment.append(coupon(), payment());
    divCart.append(divCartEmpty)
    if (!itemsDB) {
        hideItems()

    } else {
        divCartEmpty.classList.add('hidden')
        itemsDB.products.forEach(product => {
            divItems.append(itemCart(product))
        });
        divCart.classList.add('justify-between')
        divCart.classList.remove('justify-center')
    }

    divTitleItem.append(title(), divItems)

    document.addEventListener('verifyItens', function (e) {
        if (!divItems.childElementCount) {
            hideItems()
        }
    })

    document.addEventListener('cartEmpty', function () {
        hideItems()
    });

    document.addEventListener('productAdd', function (e) {
        hideItems(false)

        const [divFind] = [...divItems.childNodes].filter(divProduct => divProduct._id === e.detail);
        if (divFind)
            document.dispatchEvent(new CustomEvent('changeQtd',
                {
                    detail: e.detail
                }
            ))
        else
            divItems.append(itemCart({ id: e.detail, quantidade: 1 }))
    })


    divCart.append(divTitleItem, divCouponPayment)

    return divCart;
}

export { cart }