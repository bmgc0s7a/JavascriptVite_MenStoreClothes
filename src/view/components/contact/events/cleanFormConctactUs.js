const cleanFormConctactUs = function(form){
    form
        .forEach(input => input.value = '');
}

export {cleanFormConctactUs};