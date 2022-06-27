import { input } from "../widgets/input.js";
import { textarea } from "../widgets/textarea.js";

const formContactUs = function(){
    const form = document.createElement('form')
    form.classList.add("formContact")
    form.append(
        input('text', 'First Name'),
        input('text', 'Company'),
        input('email', 'Email'),
        textarea(4,50,'write your message here'),
        input('submit', 'send')
    );
}

export{formContactUs}