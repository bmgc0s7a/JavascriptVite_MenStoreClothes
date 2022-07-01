const a = function(text, link, classList=[]){
    const elem = document.createElement('a');
    elem.textContent = text;
    elem.href = link;
    classList.forEach((classe) => elem.classList.add(classe));
    return elem;
}

export {a};