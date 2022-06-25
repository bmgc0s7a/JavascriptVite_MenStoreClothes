class NotNumberNegative{

    static exec(attr, data){
        if(data < 0)
            throw new Error(`PRODUCT: ${attr} can't be negative!`);
    }
}

export default NotNumberNegative;