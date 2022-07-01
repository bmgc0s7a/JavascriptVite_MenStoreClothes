import WorkerStore from "../../../store/WorkerStore";
import { h1 } from "../widgets/h1";
import { workerDetails } from "./workerDetails";

const workerComponent = function (){
    const divTitleWorkers = document.createElement('div');
    divTitleWorkers.classList.add('flex', 'flex-col', 'items-center','gap-6', 'p-10', 'bg-amber-100');
    divTitleWorkers.append(h1('Still not sure? Contact our team instead!', ['font-kaushan', 'text-2xl', 'uppercase']));
    (async () => {
        const divWorkers = document.createElement('div');
        divWorkers.classList.add('flex', 'flex-col', 'sm:flex-row', 'justify-between', 'gap-20');
        const data = await WorkerStore.getAll();
        data.forEach(worker => divWorkers.append(workerDetails(worker)));
        divTitleWorkers.append(divWorkers);
      })();
    return divTitleWorkers;
}

export {workerComponent};