import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import { buttonIcon } from "../widgets/buttonIcon.js";

function Payment() {
    const divPayment = document.createElement("div");

    const divPaymentText = document.createElement("div");

    divPaymentText.append(
        p('Total price:'),
        p('30€'),
        p('Discount:'),
        p('10€'),
        p('Total:'),
        p('20€'),
    )

    divPaymentText.classList.add("grid","grid-cols-2")
    divPayment.append(divPaymentText)
    return divPayment
}

export {Payment}