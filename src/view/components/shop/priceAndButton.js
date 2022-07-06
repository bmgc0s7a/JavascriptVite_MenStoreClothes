
import CartStore from "../../../store/CartStore.js";
import { button } from "../widgets/button.js";
import { p } from "../widgets/p.js";

const priceAndButton = function (price) {
    const priceButtonDiv = document.createElement('div');
    priceButtonDiv.classList.add('flex', 'justify-between' , 'items-center');
    
const buttonAddCart =  button('addCartButton', 'Add to cart', ["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white","hover:cursor-pointer", "rounded-md" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" , "text-xs"] )
    
  buttonAddCart.addEventListener('click', function(e){
    const productId =e.target.closest('.product')._id
      CartStore.addProduct(productId)
    })

priceButtonDiv.append(
        p(price+"€", ["font-kaushan", "text-lg"]),
        buttonAddCart
    )

    return priceButtonDiv
}

export {priceAndButton}
