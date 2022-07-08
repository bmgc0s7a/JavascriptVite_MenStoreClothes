import { h1 } from "../widgets/h1";

const loadingProducts = function (){
   const h1text = h1('Products is loading...', ['m-5', 'col-span-4']);
   h1text.id = 'loadingProduts';
   return h1text;
}

export {loadingProducts};