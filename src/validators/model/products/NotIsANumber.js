class NotIsANumber{

    static exec(attr, data){
        if(!isFinite(data))
            throw new Error(`PRODUCT: ${attr} must be a number!`);
    }
}

export default NotIsANumber;