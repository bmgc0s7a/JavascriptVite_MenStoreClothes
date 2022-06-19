import LocalStorageInvalidKey from "../../../validators/database/localstorage/LocalStorageInvalidKey";
import LocalStorageNotFoundItem from "../../../validators/database/localstorage/LocalStorageNotFoundItem";
import LocalStorageVerifyKey from "../../../validators/database/localstorage/LocalStorageVerifyKey";
import LocalStorageUniqueKey from "../../../validators/database/localstorage/LocaStorageUniqueKey";

class LocalStorage {

   static #validateKeyAndItemExists(key, obj, attr){
        LocalStorageInvalidKey.exec(key);
        const dataKey = this.get(key);
        const dataIndex = dataKey.findIndex(dataOne => dataOne[attr] === obj[attr]);
        LocalStorageNotFoundItem.exec(key, dataIndex);
        return [dataKey, dataIndex];    
   } 

   static #reAddAllKeyWithValues(key, dataKey){
        this.delAll(key);
        dataKey.forEach(dataOne => this.add(key, dataOne));
   }
    
    static get(key){
        try{
            LocalStorageInvalidKey.exec(key);
            return JSON.parse(window.localStorage.getItem(key));
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }

    static add(key, value, verif = false, camp = 'id') {
        try {
            const dataValues = [];
            if (LocalStorageVerifyKey.exec(key)){
                const dataKey = this.get(key);
                if(verif) LocalStorageUniqueKey.exec(camp, value, dataKey);
                dataValues.push(...dataKey,value); 
            } else {
                dataValues.push(value);
            }
            window.localStorage.setItem(key, JSON.stringify(dataValues));
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }

    static upd(key, obj, attr = 'id'){
        try {
            const [dataKey, dataIndex] = this.#validateKeyAndItemExists(key, obj, attr);
            dataKey[dataIndex] = obj;
            this.#reAddAllKeyWithValues(key, dataKey);
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }

    static del(key, obj, attr = 'id'){
        try {
            const [dataKey, dataIndex] = this.#validateKeyAndItemExists(key, obj, attr);
            dataKey.splice(dataIndex, 1);
            this.#reAddAllKeyWithValues(key, dataKey);
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }

    static delAll(key){
        try {
            LocalStorageVerifyKey.exec(key);
            window.localStorage.removeItem(key);
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }
}

export default LocalStorage;