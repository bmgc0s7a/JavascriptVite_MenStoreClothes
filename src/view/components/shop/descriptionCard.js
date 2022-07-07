import { h1 } from "../widgets/h1.js";
import { p } from "../widgets/p.js";
import { priceAndButton } from "./priceAndButton.js";

const descriptionCard = function(title, descriptiom, price ){
    const divDescriptionCard = document.createElement('div', 'w-30');
    divDescriptionCard.classList.add('flex','flex-col',"bg-white", 'p-4', 'gap-4',  )

    divDescriptionCard.append(
        h1(title, ["font-kaushan", "text-xl", "uppercase", "textLimitTwo"]),
        p(descriptiom, ['text-sm', 'text-gray-500', "h-32", "overflow-auto", "relative", "z-0"]),
       priceAndButton(price)
    )
    
    return divDescriptionCard
}

export {descriptionCard}