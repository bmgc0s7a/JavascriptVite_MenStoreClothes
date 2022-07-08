const input = function(type, name, placeholder, classList = []){
    const input = document.createElement('input');
    input.type = type;
    input.name= name;
    (input.type === 'submit') ? input.value = placeholder : input.placeholder = placeholder;
    classList.forEach(classe => input.classList.add(classe));
    return input;
}

export {input}