import ProductStore from "../../../../store/ProductStore";
import { messageToUser } from "../../public/messageToUser";
import { colorStarsClick } from "./colorStarsClick";

const rateProduct = function(e, productID){
    try{
        const rate = e.target.closest('div')._id;
        const divStars = e.target.closest('.stars');
        ProductStore.update(productID, 'rate', rate);
        colorStarsClick(divStars, rate);
        messageToUser('Rate updated successfully!','success')
    } catch(e){
        messageToUser('Not possible set rate in this product, try again later.', 'error');
    }

    //ProductStore.update(id, property, value)
}

export {rateProduct};