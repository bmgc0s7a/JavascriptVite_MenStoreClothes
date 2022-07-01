class EmptyField{

    static exec(attr, data){
        if(!String(data).length)
            throw new Error(`WORKER: ${attr} can't be empty!`);
    }
}

export default EmptyField;