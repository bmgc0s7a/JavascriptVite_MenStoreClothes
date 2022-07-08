import CartStore from "../../../../store/CartStore"
import { messageToUser } from "../../public/messageToUser"

const addCartProduct = function(e){
    const productId = e.target.closest('.product')._id
    CartStore.addProduct(productId)
    document.dispatchEvent(new CustomEvent('productAdd',
     {
       detail:productId
     }
    ))
    messageToUser('Product Added to Cart','success');
}

export {addCartProduct};