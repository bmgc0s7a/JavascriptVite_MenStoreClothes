import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import {icon } from "../widgets/icon.js";

function payment() {
    const divPayment = document.createElement("div");

    const divPaymentText = document.createElement("div");
    const divPaymentLogos = document.createElement("div");
    divPaymentText.classList.add("grid","grid-cols-2","gap-x-12");
    divPaymentText.append(
        p('Total price:'),
        p('30€',['text-end']),
        p('Discount:'),
        p('10€',['text-end']),
        p('Total:'),
        p('20€',['text-end']),
        button('Purchase', 'Make Purchase', ["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white","hover:cursor-pointer", "rounded-md" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-10", "placeholder-opacity-50","col-span-2"]), 
    )
    divPaymentLogos.append(
        icon(["fa-brands", "fa-cc-mastercard","pt-2","px-2","text-3xl","text-amber-900"]),
        icon(["fa-brands", "fa-cc-paypal","pt-2","px-2","text-3xl","text-amber-900" ]),
        icon(["fa-brands", "fa-cc-visa","pt-2","px-2","text-3xl","text-amber-900" ]),
        icon(["fa-brands", "fa-cc-amex","pt-2","px-2","text-3xl","text-amber-900" ])
        )
    divPayment.classList.add('flex','flex-col','bg-white','my-4','justify-center','items-center','p-4')
    divPayment.append(divPaymentText,divPaymentLogos)

    return divPayment
}

export {payment}