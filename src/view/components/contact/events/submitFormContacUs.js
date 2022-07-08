import FromContactService from "../../../../service/FormContactService";
import inputIsEmpty from "../../../../validators/view/forms/inputIsEmpty";
import { messageToUser } from "../../public/messageToUser";
import { cleanFormConctactUs } from "./cleanFormConctactUs";

const submitFormContactUs = function(e){
    try {
        e.preventDefault();
        const formObj = {};
        const inputForm = [...e.target.children]
                    .filter(input=>input.type!='submit')
        inputForm.forEach(input=> {
            inputIsEmpty.exec(input.name, input.value)
            formObj[input.name] = input.value;
        });
        (async () => {
            try {
                const [message, status] = await FromContactService.send(formObj);
                messageToUser(message.message, status ? 'success': 'error');
                if(message) cleanFormConctactUs(inputForm);
            } catch (error) {
                messageToUser('Something went wrong! Please try again.')
            }
        
        })();
    } catch (error) {
        messageToUser(error);
    }
}

export {submitFormContactUs};