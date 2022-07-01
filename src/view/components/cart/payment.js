import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import { buttonIcon } from "../widgets/buttonIcon.js";

function Payment() {
    const divPayment = document.createElement("div");

    const divPaymentText = document.createElement("div");
    divPaymentText.classList.add("grid","grid-cols-2","gap-x-12")
    divPaymentText.append(
        p('Total price:'),
        p('30€'),
        p('Discount:'),
        p('10€'),
        p('Total:'),
        p('20€'),
        button('Purchase', 'Make Purchase', ["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white","hover:cursor-pointer", "rounded-md" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-10", "placeholder-opacity-50" , "text-xs"] )
    )
    
    divPayment.classList.add('flex','flex-col',"bg-white",'my-4','justify-center','items-center','p-4')
    divPayment.append(divPaymentText)

    return divPayment
}

export {Payment}