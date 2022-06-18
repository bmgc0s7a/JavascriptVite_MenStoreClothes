import LocalStorageInvalidKey from "../../../validators/database/localstorage/LocalStorageInvalidKey";
import LocalStorageNotFoundItem from "../../../validators/database/localstorage/LocalStorageNotFoundItem";
import LocalStorageVerifyKey from "../../../validators/database/localstorage/LocalStorageVerifyKey";
import LocalStorageUniqueKey from "../../../validators/database/localstorage/LocaStorageUniqueKey";

class LocalStorage {
    
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
            this.delAll(key);
            window.localStorage.setItem(key, JSON.stringify(dataValues));
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }

    static upd(key, obj, attr = 'id'){
        try {
            LocalStorageInvalidKey.exec(key);
            const dataKey = this.get(key);
            const dataIndex = dataKey.findIndex(dataOne => dataOne[attr] === obj[attr]);
            LocalStorageNotFoundItem.exec(key, dataIndex);
            dataKey[dataIndex] = obj;
            this.delAll(key);
            dataKey.forEach(dataOne => this.add(key, dataOne));
        } catch (error) {
            //! Changing Div Error
            console.log(error);
        }
    }

    static del(key, obj){
        try {
            LocalStorageVerifyKey.exec(key);
            const dataKey = this.get(key);
            const dataIndex = dataKey.findIndex(dataOne => dataOne === obj);
            dataKey.splice(dataIndex, 1);
            this.delAll(key);
            dataKey.forEach(dataOne => this.add(key, dataOne));
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