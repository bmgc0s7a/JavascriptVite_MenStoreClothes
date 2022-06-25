import EmptyDataModel from "../../validators/model/products/EmptyDataModel"
import NotIsANumber from "../../validators/model/products/NotIsANumber"
import NotNumberNegative from "../../validators/model/products/NotNumberNegative"
import NotNumberZeroAndNegative from "../../validators/model/products/NotNumberZeroAndNegative"
import NumberBetween from "../../validators/model/products/NumberBetween"

class Product {
    #id
    #title
    #image
    #desc
    #price
    #rate

    constructor(id, title, desc, price, rate = 0) {
        Object.assign(this, {id, title, desc, price, rate});
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
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
            EmptyDataModel.exec('ID',id);
            NotIsANumber.exec('ID', id);
            NotNumberZeroAndNegative.exec('ID', id);
            this.#id = id;  
        } catch (error) {
            throw error;
        }
    }

    set title(title) {
        try {
            EmptyDataModel.exec('Title',title);
            this.#title = title;
        } catch (error) {
            throw error;
        }
    }

    set image(image) {
        try {
            EmptyDataModel.exec('Image',image);
            this.#image = image;
        } catch (error) {
            throw error
        }
    }

    set desc(desc) {
        try {
            EmptyDataModel.exec('Description',desc);
            this.#desc = desc;
        } catch (error) {
            throw error;
        }
    }

    set price(price) {
        try {
            EmptyDataModel.exec('Price', price);
            NotIsANumber.exec('Price', price);
            NotNumberZeroAndNegative.exec('Price', price);
            this.#price = price;
        } catch (error) {
            throw error;
        }
    }

    set rate(rate) {
        try {
            EmptyDataModel.exec('Rate', rate);
            NotIsANumber.exec('Rate' ,rate);
            NotNumberNegative.exec('Rate', rate);
            NumberBetween.exec('Rate', rate);
            this.#rate = rate;
        } catch (error) {
            throw error;
        }
    }
}

export default Product;