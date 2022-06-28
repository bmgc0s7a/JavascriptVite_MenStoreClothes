const h1 = function () {
    const h1Events = document.createElement("h1");
    h1Events.textContent = 'CURRENT SHOPPING CART';
    h1Events.classList.add('font-kaushan');
    return h1Events;
  };
  
  export { h1 };