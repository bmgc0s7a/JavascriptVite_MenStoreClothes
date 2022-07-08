import { p } from "../widgets/p.js";

const mapContactUs = function () {
    const divMapAdress = document.createElement('div');
    divMapAdress.classList.add('flex', 'flex-col', 'gap-3');
    
    const divMap = document.createElement('iframe');
    divMap.classList.add('h-5/6', 'w-full');
    divMap.src = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2482.0924350146765!2d-0.2623319840275568!3d51.52986441688108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sThe%20Chase%20Centre%2C%202%20Chase%20Rd%2C%20London%20NW10%206HZ%2C%20United%20Kingdom!5e0!3m2!1spt-PT!2spt!4v1656504167317!5m2!1spt-PT!2spt';

    divMapAdress.append(
        divMap,
        p('The Chase Centre, 2 Chase Rd, London NW10 6HZ, United Kingdom')
    )
    return divMapAdress
}

export { mapContactUs }