class LocalStorageUniqueKey{
    
    static exec(att, value, allValues){
        allValues.some(valueOne => {
            if(value[att] === valueOne[att]) throw new Error(`Duplicate ${att} ${valueOne[att]}`);
        })
    }
}

export default LocalStorageUniqueKey;