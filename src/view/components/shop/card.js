import ProductStore from "../../../store/ProductStore"
import { descriptionCard } from "./descriptionCard"

function cardShop() {
    const divCardShop = document.createElement('div')
    divCardShop.classList.add("flex", "rounded-md")
    
    const products = ProductStore.getAll()
    console.log(products)

    divCardShop.append(
        //imagemdiv
       descriptionCard()
    )

    return divCardShop
}

export { cardShop }