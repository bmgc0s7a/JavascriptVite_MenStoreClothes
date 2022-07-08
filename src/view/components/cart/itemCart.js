import { img } from "../widgets/img.js";
import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import { buttonIcon } from "../widgets/buttonIcon.js";
import ProductStore from "../../../store/ProductStore.js";
import CartStore from "../../../store/CartStore.js";
import { messageToUser } from "../public/messageToUser.js";

function itemCart({ id, quantidade }) {

    const divItem = document.createElement('div')
    divItem._id = id;
    const divProductsImg = document.createElement('div')
    const divProductsDesc = document.createElement('div');

    (async () => {
        const {title, image, price} = await ProductStore.get(id);
        divProductsImg.classList.add('pr-8')
        divProductsImg.append(
            img(image, ['w-20']))

        divProductsDesc.append(
            p(title, ['text-sm', 'text-slate-600']),
            p(price+'€', ['font-bold', 'text-xl']))

        divProductsDesc.classList.add('flex', 'flex-col', 'self-center')

        const ElementsLeft = document.createElement('div')
        ElementsLeft.classList.add("flex", "flex-row", "nunito", 'p-4')
        ElementsLeft.append(divProductsImg, divProductsDesc)

        const divActions = document.createElement('div')
        const less = button('less', '-', ["bg-amber-300", "hover:bg-amber-900", "text-amber-900", "hover:text-white", 'border-solid', 'border-2', 'border-amber-900', 'py-1', 'px-2', 'rounded-l-md', 'text-xl'])
        const plus = button('plus', '+', ["bg-amber-300", "hover:bg-amber-900", "text-amber-900", "hover:text-white", 'border-solid', 'border-2', 'border-amber-900', 'py-1', 'px-2', 'rounded-r-md', 'text-xl'])
        const del = buttonIcon('delete', ['fa-solid', 'fa-trash'], '', ["bg-amber-300", "hover:bg-amber-900", "text-amber-900", "hover:text-white", 'border-solid', 'border-2', 'border-amber-900', 'py-1', 'px-2', 'ml-4', 'rounded', 'text-xl'])
        const qtd = button('quantity', quantidade, ["bg-amber-300", "hover:bg-amber-900", "text-amber-900", "hover:text-white", 'border-solid', 'border-y-2', 'border-amber-900', 'py-1', 'px-2', 'text-xl'])
        qtd.value = quantidade
        if (qtd.value == 1) {
            less.disabled = true
        }

        del.addEventListener('click', function(e){
            divItem.remove();
            document.dispatchEvent(new CustomEvent('verifyItens'))
        });

        document.addEventListener('changeQtd', function(e) {
            if(divItem._id === e.detail){
                qtd.value = +qtd.value + 1
                qtd.textContent = qtd.value
                if (less.disabled) {
                    less.disabled = false
                }
            }
        })

        less.addEventListener('click', function () {
            CartStore.addProduct(id, 1, false)
            qtd.value = qtd.value - 1
            qtd.textContent = qtd.value
            if (qtd.value == 1) {
                less.disabled = true
            }
            messageToUser(`Removed one unit to cart` ,'success',900);
        })
        plus.addEventListener('click', function () {
            CartStore.addProduct(id, 1, true)
            qtd.value = +qtd.value + 1
            qtd.textContent = qtd.value
            if (qtd.value > 1) {
                less.disabled = false
            }
            messageToUser(`Added one unit to cart` ,'success',900);
        })
        del.addEventListener('click', function () {
            CartStore.delProduct(id)
            messageToUser(`Product deleted from cart` ,'error',900);
        })

        divActions.append(
            less,
            qtd,
            plus,
            del
        )
        divActions.classList.add('flex','self-center','text-amber-900', "sm:px-4",)

        const hr = document.createElement('hr')
        hr.classList.add('my-2', 'md:hidden')

        divItem.classList.add('flex', "bg-white",'flex-col', "md:flex-row", "md:justify-between")
        divItem.append(ElementsLeft, divActions, hr)
    })()

    

    return divItem
}

export { itemCart }