import { input } from "../widgets/input.js";
import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import CartStore from "../../../store/CartStore.js";

const coupon = function(){
    const divCoupon = document.createElement("div");
    const divForm= document.createElement('div')

    const form = document.createElement('form')
    
    form.classList.add("flex", "flex-row", "my-2")
    form.append(
        input('text', 'fullname', ' Coupon Code', ["text-amber-900", "rounded-md" , "border-2", "border-amber-900", "placeholder-opacity-50"]),
        button('applyCoupon','Apply',["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white",'border-solid', 'border-2', 'border-amber-900','py-1','px-2','ml-4','rounded','text-xl'])
    );

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const inputCoupon = e.target.childNodes[0].value;
        if(inputCoupon){
            (async ()=>{
                try{
                    console.log(await CartStore.addCoupon(inputCoupon));
                } catch (e){
                    console.error(e);
                }
            })()
        }
    })

    divForm.classList.add('flex', "flex-row")
    divForm.append(form)

    divCoupon.classList.add('flex', "flex-col","bg-white",'mt-8',"p-4",'justify-center','items-center',)

    divCoupon.append(
        p('Have coupon?'),
        form)
        
    return divCoupon
}

export{coupon}