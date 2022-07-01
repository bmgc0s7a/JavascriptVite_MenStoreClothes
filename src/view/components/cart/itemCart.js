import { img } from "../widgets/img.js";
import { p } from "../widgets/p.js";
import { button } from "../widgets/button.js";
import {buttonIcon } from "../widgets/buttonIcon.js";

function itemCart() {
    const divItem= document.createElement('div')

    const divProductsImg= document.createElement('div')
    const divProductsDesc= document.createElement('div')

    divProductsImg.classList.add('pr-8')
    divProductsImg.append(
        img('../src/view/images/artigoTeste.jpg',['w-20']))
    
    divProductsDesc.append(
        p('H&M',['text-sm','text-slate-600']),
        p('30€',['font-bold','text-xl']))

    divProductsDesc.classList.add('flex','flex-col','self-center')

    const ElementsLeft= document.createElement('div')
    ElementsLeft.classList.add("flex", "flex-row", "nunito",'p-4')
    ElementsLeft.append(divProductsImg,divProductsDesc)

    const divActions= document.createElement('div')

    divActions.append(
        button('less','-',["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white",'border-solid', 'border-2', 'border-amber-900','py-1','px-2','rounded-l-md','text-xl']),
        button('quantity','Qtd',["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white",'border-solid', 'border-y-2', 'border-amber-900','py-1','px-2','text-xl']),
        button('plus','+',["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white",'border-solid', 'border-2', 'border-amber-900','py-1','px-2','rounded-r-md','text-xl']),
        buttonIcon('delete',['fa-solid','fa-trash'],'',["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white",'border-solid', 'border-2', 'border-amber-900','py-1','px-2','ml-4','rounded','text-xl']))
    
    divActions.classList.add('self-center','text-amber-900',"sm:px-4")

    const hr= document.createElement('hr')
    hr.classList.add('my-2','sm:hidden')

    divItem.classList.add('flex',"bg-white",'flex-col','justify-center','items-center',"sm:flex-row","sm:justify-between")
    divItem.append(ElementsLeft,divActions,hr)    

    return divItem
}

export { itemCart }