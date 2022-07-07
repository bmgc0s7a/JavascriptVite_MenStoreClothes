import { icon } from "../widgets/icon"
import { rateProduct } from "./events/rateProduct"

const stars = function (productid, rate) {
    const divStars = document.createElement('div')
    divStars.classList.add("stars","flex")
    for (let index = 5; index >= 1; index--) {
        const star = document.createElement('div')
        star.classList.add("cursor-pointer")
        star._id = index
        star.title = `Rate: ${index} | 5`
        star.append(
            icon(["fa-solid", "fa-star", (index <= rate) ? "text-yellow-500" : "text-black"]),
        )
        star.addEventListener("click", (e) => rateProduct(e, productid));
        divStars.append(
            star
        )
    }

    return divStars

}

export { stars }