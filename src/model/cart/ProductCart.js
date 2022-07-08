import AmountBelowOne from "../../validators/model/productCart/AmountBelowOne.js";

class ProductCart {
    #id;
    #quantidade;

    constructor (id, quantidade=1){
        Object.assign(this, {id, quantidade})
    }

    get id() {
        return this.#id;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set id(id) {
        this.#id = id;
    }

    set quantidade(quantidade) {
        try {
           AmountBelowOne.exec(quantidade);
            this.#quantidade = quantidade;
        } catch (error) {
            throw error;
        }
    }

}

export default ProductCart