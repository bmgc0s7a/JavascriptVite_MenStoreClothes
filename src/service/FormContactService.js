import FromContactAPI from "./api/FormContactAPI";

class FromContactService {
    static send(formValues){
        try {
            return FromContactAPI.send(formValues);
        } catch (error) {
            console.log('ErrorMeu: ' + e.message)
            throw error;
        }
    }
}

export default FromContactService;