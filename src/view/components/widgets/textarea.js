const textarea = function(rows, cols, placeholder, classList = []){
    const textarea = document.createElement('textarea');
    textarea.rows = rows;
    textarea.cols = cols;
    textarea.placeholder = placeholder;
    classList.forEach(classe => textarea.classList.add(classe));
    return textarea;
}

export{textarea}