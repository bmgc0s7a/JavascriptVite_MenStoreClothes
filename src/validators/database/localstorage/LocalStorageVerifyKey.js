class LocalStorageVerifyKey{
    
    static exec(key){
        if(!window.localStorage.getItem(key)) return false;
        return true;
    }
}

export default LocalStorageVerifyKey;