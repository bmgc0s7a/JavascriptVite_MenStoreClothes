import LocalStorage from "./localstorage/LocalStorage";

class Database {
    
    static init(){
        return LocalStorage;
    }
}

export default Database;