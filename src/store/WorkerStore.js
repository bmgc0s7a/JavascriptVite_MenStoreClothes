import WorkerBD from "../model/workers/WorkerBD";
import Worker from "../model/workers/Worker";

class WorkerStore {
    static #workers = [];

    static async getAll(){
        if(!(this.#workers.length)){
            const dataProducts = await WorkerBD.get();
            dataProducts.forEach(worker => {
                this.#add(worker);
            });
            return this.#workers;
        }
        return this.#workers;
    } 
    
    static #add(objWorker){
        const newWorkerInstance = new Worker(objWorker);
        console.log(newWorkerInstance);
        this.#workers.push(newWorkerInstance);
        return newWorkerInstance;
    }
}

export default WorkerStore;