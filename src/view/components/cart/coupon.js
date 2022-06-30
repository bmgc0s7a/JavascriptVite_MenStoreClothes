import { input } from "../widgets/input.js";
import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";

const formCoupon = function(){
    const divCoupon = document.createElement("div");
    const divForm= document.createElement('div')

    const form = document.createElement('form')
    
    form.classList.add("flex", "flex-row", "my-2")
    form.append(
        input('text', 'fullname', ' Coupon Code', ["text-amber-900", "rounded-md" , "border-2", "border-amber-900", "placeholder-opacity-50"]),
        button('applyCoupon','Apply',['border-solid', 'border-2', 'border-amber-900','py-1','px-2','ml-4','rounded','text-xl'])
    );

    divForm.classList.add('flex', "flex-row")
    divForm.append(form)

    divCoupon.classList.add('flex', "flex-col","bg-white",'mt-8',"p-4")

    divCoupon.append(
        p('Have coupon?'),
        form)
        
    return divCoupon
}

export{formCoupon}