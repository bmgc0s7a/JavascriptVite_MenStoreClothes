class EmptyDataModel{

    static exec(data){
        if(!data)
            throw new Error(`${data} can't be empty!`);
    }
}

export default EmptyDataModel;