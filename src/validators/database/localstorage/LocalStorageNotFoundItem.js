class LocalStorageNotFoundItem {
    
    static exec(key, value){
        if(value === -1) throw new Error(`Not found item in ${key}!`);
    }
}

export default LocalStorageNotFoundItem;