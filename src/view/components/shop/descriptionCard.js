import { h1 } from "../widgets/h1.js";
import { p } from "../widgets/p.js";
import { priceAndButton } from "./priceAndButton.js";

const descriptionCard = function(){
    const divDescriptionCard = document.createElement('div', 'w-30');
    divDescriptionCard.classList.add('flex','flex-col','bg-white', 'p-4', 'gap-4' )

    divDescriptionCard.append(
        h1('black valentino', ['font-kaushan', 'text-xl', 'uppercase']),
        p('description of black valentino', ['text-sm', 'text-gray-500']),
       priceAndButton()
    )
    
    return divDescriptionCard
}

export {descriptionCard}