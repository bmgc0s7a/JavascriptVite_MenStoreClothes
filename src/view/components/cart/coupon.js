import { input } from "../widgets/input.js";
import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import CartStore from "../../../store/CartStore.js";
import { messageToUser } from "../public/messageToUser.js";

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
                    await CartStore.addCoupon(inputCoupon);
                    messageToUser(`Coupon applied with success` ,'success',900)
                    const [_,couponResponse] = await CartStore.addCoupon(inputCoupon);
                    if(couponResponse)
                        messageToUser(`Coupon applied with success` ,'success',900)
                    else 
                        messageToUser(`Invalid coupon` ,'error',900)
                } catch (e){
                    console.error(e);
                    messageToUser(`Invalid coupon` ,'error',900)
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