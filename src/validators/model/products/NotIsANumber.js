class NotIsANumber{

    static exec(data){
        if(!isFinite(data))
            throw new Error(`${data} not a number!`);
    }
}

export default NotIsANumber;