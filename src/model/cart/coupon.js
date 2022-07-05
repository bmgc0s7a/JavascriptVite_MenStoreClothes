class Coupon {
    #name
    #discount

    constructor({name, discount}) {
        Object.assign(this, {name, discount});
    }

    get name() {
        return this.#name;
    }

    get discount() {
        return this.#discount;
    }

    set name(name){
        this.#name = name;
    }

    set discount(discount){
        this.#discount = discount; 
    }
}

export default Coupon;