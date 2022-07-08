import ProductStore from "../../../store/ProductStore.js"
import { h1 } from "../widgets/h1.js";
import { divOneProduct } from "./divOneProduct.js";
import { filterProduct } from "./events/filterProducts.js";
import { loadingProducts } from "./loadingProducts.js";

function cardShop() {
    const divCardShop = document.createElement('div');
    divCardShop.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "p-6", "gap-4");
    (async () => {
        const h1Load = loadingProducts();
        divCardShop.prepend(h1Load);
        const products = await ProductStore.getAll(true, 8)
        h1Load.remove();
        products.forEach(product => divCardShop.append(divOneProduct(product)));
    })();

    document.addEventListener('filterProduct', (e) => filterProduct(e,divCardShop) )
    return divCardShop
}


export { cardShop }