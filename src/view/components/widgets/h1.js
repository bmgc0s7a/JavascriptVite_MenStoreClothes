const h1 = function (text, classList = []) {
  const h1Events = document.createElement("h1");
  h1Events.textContent = text;
  classList.forEach((classe) => h1Events.classList.add(classe));
  return h1Events;
};

export { h1 }; 