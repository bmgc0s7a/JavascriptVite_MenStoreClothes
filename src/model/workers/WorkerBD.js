import WorkerService from "../../service/WorkerService";

class WorkerBD{

    static async get(){
        return await WorkerService.get();
    }
}

export default WorkerBD;