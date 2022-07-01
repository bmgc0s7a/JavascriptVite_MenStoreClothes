import { ContactUs } from "./components/contact/contactUs.js";
import { title } from "./components/cart/title.js";
import { itemCart } from "./components/cart/itemCart.js";
import { sloganContact } from "./components/contact/sloganContact.js";
import { cardShop } from "./components/shop/card.js";
import { formCoupon } from "./components/cart/coupon.js";
import { searchAndCartBtn } from "./components/shop/searchAndCartBtn.js";
import { Payment } from "./components/cart/payment.js";
import { workerComponent } from "./components/contact/workerComponent.js";

const renderPages = function(){

    document.dispatchEvent(new CustomEvent('insertPage', 
    {
        detail: {
            div: 'shop',
            elements: [searchAndCartBtn(),cardShop()]
        }
    }
    ));

    document.dispatchEvent(new CustomEvent('insertPage', 
    {
        detail: {
            div: 'aboutUS',
            elements: ['<p>About US</p>']
        }
    }
    ));

    document.dispatchEvent(new CustomEvent('insertPage', 
    {
        detail: {
            div: 'contact',
            elements: [sloganContact(), ContactUs(), workerComponent()]
        }
    }
    ));

    document.dispatchEvent(new CustomEvent('insertPage', 
    {
        detail: {
            div: 'cart',
            elements: [title(),itemCart(),formCoupon(),Payment()]
        }
    }
    ));
}

export {renderPages};