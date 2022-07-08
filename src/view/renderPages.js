import { ContactUs } from "./components/contact/contactUs.js";
import { sloganContact } from "./components/contact/sloganContact.js";
import { cardShop } from "./components/shop/card.js";
import { cart } from "./components/cart/cart.js";
import { searchAndCartBtn } from "./components/shop/searchAndCartBtn.js";
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
            div: 'contact',
            elements: [sloganContact(), ContactUs(), workerComponent()]
        }
    }
    ));

    document.dispatchEvent(new CustomEvent('insertPage', 
    {
        detail: {
            div: 'cart',
            elements: [cart()]
        }
    }
    ));
}

export {renderPages};