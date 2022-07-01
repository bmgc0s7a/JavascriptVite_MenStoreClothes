class Product {
    #name
    #image
    #category
    #description
    #email

    constructor({name, image, category, description, email}) {
        this.#name = name;
        this.#image = image;
        this.#category = category;
        this.#description = description;
        this.#email = email;
    }

    get name() {
        return this.#name;
    }

    get image() {
        return this.#image;
    }

    get category() {
        return this.#category;
    }
    get description() {
        return this.#description;
    }

    get email() {
        return this.#email;
    }
}