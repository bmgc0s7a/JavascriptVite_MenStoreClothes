import { mapContactUs } from "./mapContactUs.js";
import { formContactUs } from "./formContactUs.js";
import { p } from "../widgets/p.js";

function formMapAddress() {
    const divMapForm = document.createElement('div')
    divMapForm.classList.add("flex", "flex-col-reverse", "mx-8", "sm:flex-row", "map", "mapContact", "my-8", "justify-center", "bg-amber-100")

    divMapForm.append(
        formContactUs(),
        mapContactUs()
    )

    return divMapForm
}

export { formMapAddress }