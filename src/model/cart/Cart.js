import ProductStore from "../../store/ProductStore";
import CartBD from "./CartBD";
import Coupon from "./Coupon";
import ProductCart from "./ProductCart";

class Cart {
    #coupon;
    #products;
    #amount;

    constructor(products = [], amount = 0){
        this.#amount = amount;
        this.#products = products;
    };

    get coupon(){
        return this.#coupon;
    }

    get products(){
        return this.#products;
    }

    get amount(){
        return this.#amount;
    }

    set amount(amount){
        this.#amount = amount;
    }

    async addCoupon(coupon){
        try {
            const [data, response] = await CartBD.valCoupon(coupon);
            console.log(data);
            if(response){
                //this.#coupon = 'dasdsadasda';
                this.#coupon = new Coupon(data.couponcode);
            }
            console.log(this);
            return [data.message, response];
        } catch(e){
            throw e;
        }
    }

    productsAddRemoveQtd(productID, quantidade, isIncrease, insertStoreAmount){
        try {
            const productFind = this.#products.findIndex(product => product.id === productID);
            if(productFind == -1){
                this.#products.push(new ProductCart(productID, quantidade));  
            } else {
                if(isIncrease)
                    this.#products[productFind].quantidade += quantidade;
                else
                    this.#products[productFind].quantidade -= quantidade;
            }
            if(insertStoreAmount) {
                const priceProduct = ProductStore.get(productID).price;
                if(isIncrease)
                    this.#amount += priceProduct;
                else 
                    this.#amount -= priceProduct;
            }
        } catch (e){
            throw e;
        }
    }

    productsRemove(productID){
        try {
            const productFind = this.#products.findIndex(product => product.id === productID);
            this.#products.splice(productFind,1);
        } catch (error) {
            throw error;
        }
    }
}

export default Cart;