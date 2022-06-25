import ProductService from "../../service/ProductService";
import ProductJSON from "./ProductJSON";

class ProductBD{

    static async get(){
        return await ProductService.get();
    }

    static save(productInstance){
        try {
            const productObj = ProductJSON.convert(productInstance);
            ProductService.save(productObj);
        } catch (e) {
            throw e;
        }
    }

    static update(productInstance){
        try {
            const productObj = ProductJSON.convert(productInstance);
            ProductService.update(productObj);
        } catch (e) {
            throw e;
        }
    }

    static delete(productInstance){
        try {
            const productObj = ProductJSON.convert(productInstance);
            ProductService.delete(productObj);
        } catch (e) {
            throw e;
        }
    }
}

export default ProductBD;