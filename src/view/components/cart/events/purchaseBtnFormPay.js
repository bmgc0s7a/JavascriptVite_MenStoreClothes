import CartStore from "../../../../store/CartStore.js";
import { messageToUser } from "../../public/messageToUser.js";
import CartBD from "../../../../model/cart/CartBD.js";

const purchaseBtnFormPay = function(){
    try {
        (async () => {
            const [message, status] = await CartStore.payment();
            console.log(message)
            messageToUser(message.message, (status) ?? 'success', 2000);
            CartBD.delete();
            document.dispatchEvent(new Event('cartEmpty'));
        })()
    } catch (error) {
        messageToUser('Fail to purchase the products, please try again')
    }
}
export {purchaseBtnFormPay}