const icon = function(classList = []){
    const iconFont = document.createElement('p')

    

classList.forEach((classe) => iconFont.classList.add(classe));
return iconFont

}

export {icon}