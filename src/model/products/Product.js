import EmptyDataModel from "../../validators/model/products/EmptyDataModel"
import NotIsANumber from "../../validators/model/products/NotIsANumber"
import NotNumberZeroAndNegative from "../../validators/model/products/NotNumberZeroAndNegative"
not

class Product {
    #id
    #title
    #desc
    #price
    #rate

    constructor(id, title, desc, price, rate = 0) {
        this.#id = id;
        this.#title = title;
        this.#desc = desc;
        this.#price = price;
        this.#rate = rate;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get desc() {
        return this.#desc;
    }

    get price() {
        return this.#price;
    }

    get rate() {
        return this.#rate;
    }

    set id(id) {
        try {
            EmptyDataModel.exec(id);
            NotIsANumber.exec(id);
            NotNumberZeroAndNegative.exec(id);
            this.#id = id;  
        } catch (error) {
            throw error;
        }
    }

    set title(title) {
        try {
            EmptyDataModel.exec(title);
            this.#title = title;
        } catch (error) {
            throw error;
        }
    }

    set desc(desc) {
        try {
            EmptyDataModel.exec(desc);
            this.#desc = desc;
        } catch (error) {
            throw error;
        }
    }

    set price(price) {
        try {
            EmptyDataModel.exec(price);
            NotIsANumber.exec(id);
            NotNumberZeroAndNegative.exec(price);
            this.#desc = title;
        } catch (error) {
            throw error;
        }
    }

    set rate(rate) {
        try {
            EmptyDataModel.exec(rate);
            NotIsANumber.exec(rate);
            NotNumberNegative.exec(rate);
            this.#rate = rate;
        } catch (error) {
            throw error;
        }
    }
}

export default Product;