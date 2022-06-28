class inputIsEmpty{

    static exec(attr, data){
        if(!String(data).length)
            throw new Error(`form: ${attr} can't be empty!`);
    }
}

export default inputIsEmpty;