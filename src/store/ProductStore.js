import Product from "../model/products/Product";
import ProductBD from "../model/products/ProductBD";
import NotExistProduct from "../validators/store/products/NotExistProduct";
import { faker } from "@faker-js/faker";

class ProductStore {
    static #Products = [];

    static async getAll(limit = false, number = 0){
        if(!(this.#Products.length)){
            const dataProducts = await ProductBD.get();
            if(!(this.#Products.length)){
                dataProducts.forEach(product => {
                    this.#add(product);
                });
            }
            if(limit && dataProducts.length < number) {
                const total = number - dataProducts.length;
                for(let i = total; i > 0; i--){
                    const newProduct = this.newProduct(dataProducts[i-1], this.#Products.length);
                    ProductBD.save(newProduct);
                }
            }
            return this.#Products;
        }
        return this.#Products;
    }

    static newProduct(productsInfo, id){
        // const [lastProduct] = productsInfo.slice(-1);
        // console.log(lastProduct);
        const newProduct = Object.assign({},productsInfo);
        newProduct.id = ++id
        newProduct.title = faker.commerce.productName();
        newProduct.desc = faker.commerce.productDescription();
        newProduct.price = Number((Math.random() * 100).toFixed(2));
        newProduct.rate = 0;
        return this.#add(newProduct);
    }
    
    static async get(value,attr = 'id'){
        try {
            await ProductStore.getAll();
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
            (async () => {
                const productToChange = await this.get(id);
                productToChange[property] = value;
                ProductBD.update(productToChange);  
            })();
                    
        } catch (e) {
            throw e;
        }
    }
}

export default ProductStore;