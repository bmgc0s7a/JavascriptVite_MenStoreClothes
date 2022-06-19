import LocalStorageVerifyKey from "./LocalStorageVerifyKey";

class LocalStorageInvalidKey extends Error{
    
    static exec(key){
        if(!LocalStorageVerifyKey.exec(key)) throw new Error(`Invalid or empty ${key} on LocalStorage`);
    }
}

export default LocalStorageInvalidKey;