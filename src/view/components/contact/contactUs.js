import { h1 } from "../widgets/h1.js";
import { formMapAddress } from "./formMapAddress.js"

function ContactUs() {
    const divContactUs= document.createElement('div')
    divContactUs.classList.add("flex", "flex-col", "bg-amber-900" , "justify-center", "contactUs", "p-10")

    divContactUs.append(
        h1('CONTACT US', ["text-center", "mt-2" , "text-2xl", 'text-amber-900' , "font-nunito"]),
        formMapAddress(),
    )

    return divContactUs
}

export { ContactUs }