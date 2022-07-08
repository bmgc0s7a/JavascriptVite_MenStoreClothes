import { includesStringOnAnother } from "../../../../helpers/includesStringOnAnother.js";
import { p } from "../../widgets/p.js";

const filterProduct = function (e, divCardShop) {

    const divsProduct = [...divCardShop.children]
    let count = 0;
    divsProduct.forEach((product) => {


        if (e.detail.length != 0 && !includesStringOnAnother(product._title,e.detail)) {
            product.classList.add('hidden')
            count++;
        }
        else {
            product.classList.remove('hidden')
        }

         
    })

    const pFoundOrnot = p(`Product ${e.detail} not found!`, ['productNotFound'])
    const selectPProductNotFound = document.querySelector('.productNotFound')
    
    if (count == divsProduct.length) {
       
        if (selectPProductNotFound) {
            selectPProductNotFound.textContent=`Product ${e.detail} not found!`
        }
        else{
            divCardShop.before(
                pFoundOrnot)
        }
    }
    else{
        selectPProductNotFound?.remove()
    }
    
}
export { filterProduct }