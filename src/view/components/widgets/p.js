const p = function (text, classList = []) {
    const pEvents = document.createElement("p");
    pEvents.textContent = text;
    classList.forEach((classe) => pEvents.classList.add(classe));
    return pEvents;
  };
  
  export { p };
  