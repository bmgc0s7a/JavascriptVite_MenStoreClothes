import { h1 } from "../widgets/h1.js";

function title() {
    const divTitle= document.createElement('div')
    divTitle.append(h1('CURRENT SHOPPING CART',['font-kaushan']))
    
    return divTitle
}

export { title };