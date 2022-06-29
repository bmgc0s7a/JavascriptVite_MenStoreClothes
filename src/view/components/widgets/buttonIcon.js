const buttonIcon = function (id, iconClass , textContent = '',classList = []) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = textContent;
    const icon = document.createElement("i");
    icon.classList.add(...iconClass);
    btn.prepend(icon);
    classList.forEach((classe) => btn.classList.add(classe));
    return btn;
  };
  
  export { buttonIcon }; 