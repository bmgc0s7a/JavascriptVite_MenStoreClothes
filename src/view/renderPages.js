import { ContactUs } from "./components/contact/contactUs.js";
import { sloganContact } from "./components/contact/sloganContact.js";
import { cardShop } from "./components/shop/card.js";
import { cart } from "./components/cart/cart.js";

const renderPages = function(){

    document.dispatchEvent(new CustomEvent('insertPage', 
    {
        detail: {
            div: 'shop',
            elements: [cardShop()]
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
            elements: [sloganContact(), ContactUs()]
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