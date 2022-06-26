import Product from "../model/products/Product";
import ProductBD from "../model/products/ProductBD";
import NotExistProduct from "../validators/store/products/NotExistProduct";

class ProductStore {
    static #Products = [];

    static async getAll(){
        if(!(this.#Products.length)){
            const dataProducts = await ProductBD.get();
            dataProducts.forEach(product => {
                this.#add(product);
            });
            return this.#Products;
        }
        return this.#Products;
    }
    
    static get(value,attr = 'id'){
        try {
            const [objOrNot] = this.#Products.filter(product => product[attr] === value);
            NotExistProduct.exec(objOrNot);
            return objOrNot;
        } catch (e){
            throw e;
        }
    }

    static #add(objProduct){
        const newProductInstance = new Product(objProduct);
        this.#Products.push(newProductInstance);
        return newProductInstance;
        //console.log();
    }
    
    static save(objProduct){
        try {
            const newProduct = this.#add(objProduct);
            ProductBD.save(newProduct);  
        } catch (e) {
            throw e;
        }
    }

    static update(id, property, value){
        try {
            const productToChange = this.get(id);
            productToChange[property] = value;
            ProductBD.update(productToChange);          
        } catch (e) {
            throw e;
        }
    }
}

export default ProductStore;