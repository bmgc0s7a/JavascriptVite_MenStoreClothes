import { icon } from "../widgets/icon"

const stars = function () {
    const divStars = document.createElement('div')
    divStars.classList.add("flex")



 

    for (let index = 1; index < 6; index++) {
        const star = document.createElement('div')
        star.classList.add()
        star.id = index
        star.append(
            icon(["fa-regular", "fa-star"]),

        )
        divStars.append(
            star
        )

    }

    return divStars

}

export { stars }