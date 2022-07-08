import ResponseWrong from "../../validators/api/products/ResponseWrong";

class ProductsAPI{

    static async get() {
        try {
            const getData = await fetch("https://fakestoreapi.com/products/category/men's clothing");
            ResponseWrong.exec(getData);
            const data = await getData.json();
            return data;   
        } catch (e) {
            throw e
        }
    }

    static obj(obj){
        return {
            id: obj.id, 
            title: obj.title,
            image: obj.image,
            desc: obj.description, 
            price: obj.price, 
            rate: 0
        }
    }
}

export default ProductsAPI;