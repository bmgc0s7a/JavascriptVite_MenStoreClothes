import { button } from "../widgets/button.js"
import { input } from "../widgets/input.js"

function searchAndCartBtn() {
const divSearchBtn = document.createElement('div')
divSearchBtn.classList.add()
const cartBtn = button("cartBtn","Ir para o carrinho", ["bg-amber-700"])
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
divSearchBtn.append(
    input("text","searchBar", "Search Item"),
    cartBtn
)

return divSearchBtn
}

export {searchAndCartBtn}