import { ContactUs } from "./components/contact/contactUs.js";
import { title } from "./components/cart/title.js";
import { itemCart } from "./components/cart/itemCart.js";
import { sloganContact } from "./components/contact/sloganContact.js";
import { cardShop } from "./components/shop/card.js";

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
            elements: [title(),itemCart()]
        }
    }
    ));
}

export {renderPages};