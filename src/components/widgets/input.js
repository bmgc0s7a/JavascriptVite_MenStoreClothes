const input = function(type, placeholder, classList = []){
    const input = document.createElement('input');
    input.type = type;
    (input.type === 'submit') ? input.value = placeholder : input.placeholder = placeholder;
    classList.forEach(classe => input.classList.add(classe));
    return input;
}

export {input}