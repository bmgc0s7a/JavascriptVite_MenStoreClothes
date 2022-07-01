import WorkerAPI from "./api/WorkerAPI";
import Database from "./database/Database";
import {faker} from "@faker-js/faker";

class WorkerService {

    static #bd = Database.init();

    static async get(limit = 2, dataFilter='name,picture,email'){
        try {
            return this.#bd.get('workers');
        } catch (e) {
            try {
                const data = await WorkerAPI.get(limit, dataFilter);
                data.results.forEach(function(worker){
                    WorkerService.#bd.add('workers', WorkerAPI.obj(worker));
                });
                return this.#bd.get('workers');
            } catch (err) {
                throw err;
            }
        }
    }

}

export default WorkerService;