class NumberBetween{

    static exec(attr, data, min = 0, max = 5){
        try{
            if(!(data >= min && data <= max))
                throw new Error(`PRODUCT: ${attr} is not between ${min} and ${max}`);
        } catch(e){
            throw e;
        }
    }
}

export default NumberBetween;