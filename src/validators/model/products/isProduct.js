import Product from "../../../model/products/Product";

class isProduct {

    static exec (product){
        if(!(product instanceof Product))
            throw new Error(`Object is not a instanceof Product can't convert in Object!`);
    }
}

export default isProduct;