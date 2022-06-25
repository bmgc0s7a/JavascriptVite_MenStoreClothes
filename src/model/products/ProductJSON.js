import isProduct from "../../validators/model/products/isProduct";

class ProductJSON{

    static convert(product){
        try{
            isProduct.exec(product);
            return {
                id: product.id,
                title: product.title,
                image: product.image,
                desc: product.desc,
                price: product.price,
                rate: product.rate
            }
        } catch (e){
            throw e;
        }
    }
}

export default ProductJSON;