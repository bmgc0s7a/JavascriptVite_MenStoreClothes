class NotNumberZeroAndNegative{

    static exec(data){
        if(data <= 0)
            throw new Error(`${data} can't be 0 or negative!`);
    }
}

export default NotNumberZeroAndNegative;