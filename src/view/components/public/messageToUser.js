import { buttonIcon } from "../widgets/buttonIcon";
import { h1 } from "../widgets/h1";
import { removeDiv } from "./events/removeDiv";

const messageToUser = function(message, type = 'error', time = 900){
    const divMessage = document.createElement('div');
    divMessage.classList.add('fixed','flex','gap-2', 'z-10','right-0', 'top-5', 'p-4' , (type === 'error') ? 'bg-red-600' : 'bg-green-600', 'cursor-pointer');
    const h1Elem = h1(message);
    const iconClose = buttonIcon('', ['fa-solid', 'fa-xmark', 'opacity-50', 'hover:opacity-100']);
    iconClose.addEventListener('click', (e) => removeDiv(divMessage));
    divMessage.append(h1Elem, iconClose);
    setTimeout(() => removeDiv(divMessage), time);
    document.body.prepend(divMessage);
}

export {messageToUser};