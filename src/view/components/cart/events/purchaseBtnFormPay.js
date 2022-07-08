import CartStore from "../../../../store/CartStore.js";
import { messageToUser } from "../../public/messageToUser.js";
import CartBD from "../../../../model/cart/CartBD.js";

const purchaseBtnFormPay = function(){
    try {
        (async () => {
            const [_, status] = await CartStore.payment();
            messageToUser('Thank you for your purchase!', (status) ?? 'success');
            CartBD.delete();
            document.dispatchEvent(new Event('cartEmpty'));
        })()
    } catch (error) {
        messageToUser('Fail to purchase the products, please try again')
    }
}
export {purchaseBtnFormPay}