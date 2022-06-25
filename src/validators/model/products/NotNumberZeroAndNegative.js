import NotNumberNegative from "./NotNumberNegative";

class NotNumberZeroAndNegative{

    static exec(atrr, data){
        try{
            if(data == 0 && NotNumberNegative.exec(data))
                throw new Error(`PRODUCT: ${attr} can't be 0`);
        } catch(e){
            throw e;
        }
    }
}

export default NotNumberZeroAndNegative;