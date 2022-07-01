import {faker} from "@faker-js/faker";

class WorkerAPI{

    static #id = 0;

    static async get(limit, dataLimit) {
        try {
            const getData = await fetch(`https://randomuser.me/api/?inc=${dataLimit}&results=${limit}`);
            const data = await getData.json();
            return data;   
        } catch (e) {
            throw e
        }
    }

    static #category(){
        if(this.#id % 2 == 0)
            return "Sales";
        return "Support";
    } 

    static #description = faker.lorem.paragraph();

    static obj(obj){
        this.#id++;
        return {
            id: this.#id,
            name: `${obj.name.first} ${obj.name.last}`,
            image: obj.picture.medium,
            category: this.#category(), 
            description: this.#description,
            email: obj.email
        }
    }
}

export default WorkerAPI;