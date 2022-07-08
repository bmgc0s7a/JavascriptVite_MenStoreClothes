import CartStore from "../../../../store/CartStore.js";
import { messageToUser } from "../../public/messageToUser.js";

const submitFormCoupon = function (e) {
    e.preventDefault();
    const inputCoupon = e.target.childNodes[0].value;
    if (inputCoupon) {
        (async () => {
            try {
                //await CartStore.addCoupon(inputCoupon);
                //messageToUser(`Coupon applied with success`, 'success', 900)
                const [_, couponResponse] = await CartStore.addCoupon(inputCoupon);
                if (couponResponse)
                    messageToUser(`Coupon applied with success`, 'success')
                else
                    messageToUser(`Invalid coupon`, 'error')
            } catch (e) {
                console.error(e);
                messageToUser(`Invalid coupon`, 'error')
            }
        })()
    }

}

export { submitFormCoupon }