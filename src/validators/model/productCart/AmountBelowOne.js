class AmountBelowOne{

    static exec(data){
        if(data<1)
            throw new Error(`ProductCart: Can't be less then 1!`);
    }
}

export default AmountBelowOne