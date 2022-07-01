import EmptyField from "../../validators/model/workers/EmptyField"

class Worker {
    #id
    #name
    #image
    #category
    #description
    #email

    constructor({id, name, image, category, description, email}) {
        Object.assign(this, {id, name, image, category, description, email});
    }

    get id() {
        return this.#id;
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

    set id(id) {
        EmptyField.exec('id', id);
        this.#id = id; 
    }

    set name(name) {
        EmptyField.exec('name', name);
        this.#name = name;
    }

    set image(image) {
        EmptyField.exec('image', image);
        this.#image = image;
    }

    set category(category) {
        EmptyField.exec('category', category);
        this.#category = category;
    }
    set description(description) {
        EmptyField.exec('description', description);
        this.#description = description;
    }

    set email(email) {
        EmptyField.exec('email', email);
        this.#email = email;
    }
}

export default Worker;