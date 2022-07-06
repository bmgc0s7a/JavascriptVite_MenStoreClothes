class Coupon {
    #code
    #discount

    constructor({code, discount}) {
        Object.assign(this, {code, discount});
    }

    get code() {
        return this.#code;
    }

    get discount() {
        return this.#discount;
    }

    set code(code){
        this.#code = code;
    }

    set discount(discount){
        this.#discount = discount; 
    }
}

export default Coupon;