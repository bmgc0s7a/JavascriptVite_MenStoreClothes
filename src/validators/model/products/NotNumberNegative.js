class NotNumberNegative{

    static exec(data){
        if(data < 0)
            throw new Error(`${data} can't be negative!`);
    }
}

export default NotNumberNegative;