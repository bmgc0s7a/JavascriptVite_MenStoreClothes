import FromContactAPI from "./api/FormContactAPI";

class FromContactService {
    static send(formValues){
        try {
            return FromContactAPI.send(formValues);
        } catch (error) {
            throw error;
        }
    }
}

export default FromContactService;