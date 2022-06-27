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

const selectPage = document.querySelector('#menu')
selectPage.addEventListener('click', function(e){
  const menuActive = e.target.closest('li')
  if(menuActive)
  {
    const divShop = document.querySelector('#app');

    [...divShop.children].forEach(div => {
      if(menuActive.id.includes(div.id)){
        if(div.classList.contains('hidden')) div.classList.remove('hidden')
      }
      else{
        div.classList.add('hidden')
      }
    })
  }
})

renderPages();

