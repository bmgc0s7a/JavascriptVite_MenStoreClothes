import { a } from "../widgets/a";
import { h1 } from "../widgets/h1";
import { img } from "../widgets/img";
import { p } from "../widgets/p";

const workerDetails = function({image, name, category, description, email}){

    const divOneWorker = document.createElement('div');
    divOneWorker.classList.add('flex', 'flex-col', 'gap-2', 'items-center', 'max-w-sm');
    divOneWorker.append(
        img(image, ['rounded-full']),
        h1(name, ['font-kaushan', 'text-lg', 'uppercase']),
        h1(category, ['capitalize', 'text-gray-500', 'text-sm']),
        p(description),
        a('Contact', `mailto:${email}`, ["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white","hover:cursor-pointer", "rounded-md" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-2", "placeholder-opacity-50" , "mx-20"])
    );
    return divOneWorker;
}

export {workerDetails};