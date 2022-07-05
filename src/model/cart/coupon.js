class Coupon {
    #name
    #description

    constructor({name, description}) {
        Object.assign(this, {name, description});
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    set name(name){
        this.#name = name;
    }

    set description(description){
        this.#description = description; 
    }
}

export default Coupon;