import { mapContactUs } from "./mapContactUs.js";
import { formContactUs } from "./formContactUs.js";
import { p } from "../widgets/p.js";

function formMapAddress() {
    const divMapForm = document.createElement('div')
    divMapForm.classList.add("flex", "flex-col-reverse", "mx-8", "p-5", "md:flex-row", "map", "mapContact", "my-3", "justify-center", "bg-amber-100", "gap-3", "rounded-md")
    
    divMapForm.append(
        formContactUs(),
        mapContactUs()
    )

    return divMapForm
}

export { formMapAddress }