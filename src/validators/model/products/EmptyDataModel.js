class EmptyDataModel{

    static exec(attr, data){
        if(!String(data).length)
            throw new Error(`PRODUCT: ${attr} can't be empty!`);
    }
}

export default EmptyDataModel;