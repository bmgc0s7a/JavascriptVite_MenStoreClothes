import ProductStore from "../../../../store/ProductStore";
import { messageToUser } from "../../public/messageToUser";
import { colorStarsClick } from "./colorStarsClick";

const rateProduct = function(e, productID){
    try{
        const rate = e.target.closest('div')._id;
        const divStars = e.target.closest('.stars');
        console.dir(divStars)
        ProductStore.update(productID, 'rate', rate);
        colorStarsClick(divStars, rate);
        messageToUser(`Rate ${rate} of ${divStars.childElementCount} updated successfully of product ${productID} !`,'success')
    } catch(e){
        messageToUser('Not possible set rate in this product, try again later.', 'error');
    }

}

export {rateProduct};