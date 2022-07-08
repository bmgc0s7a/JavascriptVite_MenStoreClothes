const button = function (id,textContent, classList = []) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = textContent;
    classList.forEach((classe) => btn.classList.add(classe));
    return btn;
  };
  
  export { button }; 