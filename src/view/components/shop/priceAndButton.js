import { button } from "../widgets/button,js";
import { p } from "../widgets/p,js";

const priceAndButton = function () {
    const priceAndButton = document.createElement('div');
    priceAndButton.classList.add('flex', 'justify-between', 'gap-3');
    

    priceAndButton.append(
        p('$223'),
        button('addCartButton', 'Add to cart')
    )
    return priceAndButton
}

export {priceAndButton}
