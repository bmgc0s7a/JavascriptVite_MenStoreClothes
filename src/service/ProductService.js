import ProductsAPI from "./api/ProductsAPI";
import Database from "./database/Database";

class ProductService {

    static #bd = Database.init();

    static async get(){
        try {
            return this.#bd.get('products');
        } catch (e) {
            try {
                const data = await ProductsAPI.get();
                data.forEach(function(product){
                    ProductService.#bd.add('products', ProductsAPI.obj(product), true);
                });
                return this.#bd.get('products');
            } catch (err) {
                throw err;
            }
        }
    }

    static save(productObj){
        try {
            this.#bd.add('products', productObj, true);
        } catch (e) {
            throw e;
        }
    }

    static update(productObj){
        try {
            this.#bd.upd('products', productObj);
        } catch (e) {
            throw e;
        }
    }

    static delete(productObj){
        try {
            this.#bd.del('products', productObj);
        } catch (e) {
            throw e;
        }
    }

}

export default ProductService;