import inputIsEmpty from "../../../validators/view/forms/inputIsEmpty.js";
import { input } from "../widgets/input.js";
import { textarea } from "../widgets/textarea.js";


const formContactUs = function(){
    const form = document.createElement('form')
    form.classList.add("formContact", "flex", "flex-col", "my-2", "mx-2")
    form.append(
        input('text', 'firstName', 'First Name', ["bg-amber-300", "text-black", "rounded-md", "mb-2" , "border-2", "border-black", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" ]),
        input('email','email', 'Email', ["bg-amber-300", "text-black", "rounded-md", "mb-2" , "border-2", "border-black", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" ]),
        textarea(4,50, 'textarea','write your message here', ["bg-amber-300", "text-black", "rounded-md", "mb-2" , "border-2", "border-black", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" ]),
        input('submit','submit', 'send', ["bg-amber-300", "text-black", "rounded-md", "mb-2" , "border-2", "border-black", "placeholder-black", "py-2", "px-1", "placeholder-opacity-50" , "mx-20"]),
    );


        form.addEventListener('submit', function(e){
            try {
                 e.preventDefault()
            const inputText = [...e.target.children].filter(input=>input.type!='submit')
           console.dir(inputText)

           inputText.forEach(input=>inputIsEmpty.exec(input.name, input.value))
            } catch (error) {
                console.log(error)
            }
           
        })

    return form
}

export{formContactUs}