import isProduct from "../../validators/model/products/isProduct";

class ProductJSON{

    static convert(product){
        try{
            isProduct.exec(product);
            return {
                id: product.id,
                title: product.title,
                desc: product.desc,
                price: product.price,
                rate: product.rate
            }
        } catch (e){
            throw e;
        }
        //if(product)
    }
}

export default ProductJSON;