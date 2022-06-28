import { h1 } from "../cart/h1.js"
import { formMapAddress } from "./formMapAddress.js"

function ContactUs() {
    const divContactUs= document.createElement('div')
    divContactUs.classList.add("flex", "flex-col", "bg-amber-900" , "justify-center", "contactUs")

    divContactUs.append(
        h1('CONTACT US', ["text-center", "mt-2" , "text-lg", "font-nunito"]),
        formMapAddress(),
    )

    return divContactUs
}

export { ContactUs }