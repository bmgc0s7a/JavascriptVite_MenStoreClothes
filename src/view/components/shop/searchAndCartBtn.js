import { button } from "../widgets/button.js"
import { icon } from "../widgets/icon.js"
import { input } from "../widgets/input.js"

function searchAndCartBtn() {
const divSearchBtn = document.createElement('div')
divSearchBtn.classList.add("flex", "items-center", "gap-8", "min-w-full", "place-content-around")
const cartBtn = button("cartBtn","Ir para o carrinho", ["bg-amber-300", "hover:bg-amber-900","text-amber-900","hover:text-white","hover:cursor-pointer", "rounded-md" , "border-2", "border-amber-900", "placeholder-black", "py-2", "px-11", "placeholder-opacity-50" , "text-xs"] )
cartBtn.addEventListener('click', (e)=>{

        const divShop = document.querySelector('#app');
    
        [...divShop.children].forEach(div => {
          if(div.id.includes('cart')){
            if(div.classList.contains('hidden')) div.classList.remove('hidden')
          }
          else{
            div.classList.add('hidden')
          }
        })
      
       
})

 const divSearch = document.createElement('div')
        divSearch.classList.add()
        divSearch.append(
            icon(["fa-solid", "fa-magnifying-glass" ]),
            input("text","searchBar", "Search Item",["bg-amber-100", "placeholder-black", "placeholder-opacity-50", "border-b-2", "border-black", "focus:outline-none"])
        )

divSearchBtn.append(
   divSearch,
    cartBtn
)

return divSearchBtn
}

export {searchAndCartBtn}