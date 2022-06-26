import './src/css/output.css'
import '@fortawesome/fontawesome-free/js/all'
import { renderPages } from './src/view/renderPages';

const pagesDiv = {
  'shop': document.querySelector('#shop'),
  'aboutUS': document.querySelector('#aboutUs'),
  'contact': document.querySelector('#contact')
};

document.addEventListener('insertPage', function(e){ 
  e.detail.elements.forEach(element => pagesDiv[e.detail.div].append(element)); 
});

renderPages();

console.log(pagesDiv);