import FromContactService from "../../../service/FormContactService.js";
import inputIsEmpty from "../../../validators/view/forms/inputIsEmpty.js";
import { messageToUser } from "../public/messageToUser.js";
import { input } from "../widgets/input.js";
import { textarea } from "../widgets/textarea.js";
import { submitFormContactUs } from "./events/submitFormContacUs.js";


const formContactUs = function(){
    const form = document.createElement('form')
    form.classList.add("formContact", "flex", "flex-col", "my-2", "mx-2")
    form.append(
        input('text', 'fullname', 'Full Name', ["bg-amber-300", "text-amber-900", "rounded-md", "mb-2" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" ]),
        input('email','email', 'Email', ["bg-amber-300", "text-amber-900", "rounded-md", "mb-2" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" ]),
        textarea(4,50, 'message','Write your message here', ["bg-amber-300", "text-amber-900", "rounded-md", "mb-2" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" ]),
        input('submit','submit', 'SEND', ["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white","hover:cursor-pointer", "rounded-md", "mb-2" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" , "mx-20"]),
    );

    form.addEventListener('submit', function(e){
        submitFormContactUs(e);     
    })

    return form
}

export{formContactUs}