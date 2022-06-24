import NotNumberNegative from "./NotNumberNegative";

class NotNumberZeroAndNegative{

    static exec(data){
        try{
            if(data == 0 && NotNumberNegative.exec(data))
                throw new Error(`${data} can't be 0`);
        } catch(e){
            throw e;
        }
    }
}

export default NotNumberZeroAndNegative;