import ProductStore from "../../../store/ProductStore.js"
import { descriptionCard } from "./descriptionCard.js"
import { imageCard } from "./imageCard.js"

function cardShop() {
    const divCardShop = document.createElement('div');
    divCardShop.classList.add("grid","grid-cols-1","sm:grid-cols-2", "lg:grid-cols-4", "p-6", "gap-4");


    (async () => {
        const products = await ProductStore.getAll()

        products.forEach(product => {
            const divOneCard = document.createElement('div')
            divOneCard._id=product.id
            divOneCard._title=product.title
            divOneCard.classList.add("product","flex", "flex-col","gap-4", "items-center","bg-white" ,"max-w-[250px]", "rounded-md", "pt-4", "justify-between")
            divOneCard.append(
                imageCard(product.image),
                descriptionCard(product.title,product.desc, product.price)
            )
            divCardShop.append(
                divOneCard
            )
        })
    })();


    return divCardShop
}

export { cardShop }