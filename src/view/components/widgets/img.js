const img = function (src, classList = []) {
    const image = document.createElement("img");
    image.src = src;
    classList.forEach((classe) => image.classList.add(classe));
    return image;
  };
  
  export { img }; 