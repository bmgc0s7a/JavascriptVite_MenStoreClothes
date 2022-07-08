import { descriptionCard } from "./descriptionCard"
import { imageCard } from "./imageCard"
import { stars } from "./stars"

const divOneProduct = function(product){
    const divOneProd = document.createElement('div')
    divOneProd._id = product.id
    divOneProd._title = product.title
    divOneProd.classList.add("product", "flex", "flex-col", "gap-4", "items-center","imageCard", "bg-white", "max-w-[250px]", "rounded-md", "pt-4", "justify-between")
    divOneProd.append(
        imageCard(product.image),
        stars(product.id, product.rate),
        descriptionCard(product.title,product.desc, product.price)
    )
    return divOneProd;
}

export {divOneProduct};