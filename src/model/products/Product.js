import EmptyDataModel from "../../validators/model/products/EmptyDataModel"
import NotNumberZeroAndNegative from "../../validators/model/products/NotNumberZeroAndNegative"

class Product {
    #id
    #title
    #desc
    #price
    #rate

    constructor(id, title, desc, price, rate) {
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
            NotNumberZeroAndNegative.exec(price);
            this.#desc = title;
        } catch (error) {
            throw error;
        }
    }

    set rate(rate) {
        try {
            EmptyDataModel.exec(rate);
            NotNumberZeroAndNegative.exec(rate);
            this.#rate = rate;
        } catch (error) {
            throw error;
        }
    }
}