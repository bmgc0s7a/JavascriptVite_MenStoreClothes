const textarea = function(rows, cols, name, placeholder, classList = []){
    const textarea = document.createElement('textarea');
    textarea.rows = rows;
    textarea.cols = cols;
    textarea.name = name;
    textarea.placeholder = placeholder;
    classList.forEach(classe => textarea.classList.add(classe));
    return textarea;
}

export{textarea}