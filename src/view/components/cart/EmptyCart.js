import { h1 } from "../widgets/h1"
import { icon } from "../widgets/icon"

const divEmptyCart = function () {
    const divEmptyCart = document.createElement("div");
    divEmptyCart.id= "cart-empty"
    divEmptyCart.classList.add("flex", "flex-col", "item-center", "gap-3")

    divEmptyCart.append( 
        icon(['fa-solid', 'fa-cart-arrow-down', "text-5xl"]),
        h1('Your cart is empty!', ['flex', 'justify-center'])
       
    )

    return divEmptyCart
}

export { divEmptyCart }