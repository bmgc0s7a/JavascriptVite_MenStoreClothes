const colorStarsClick = function (divStart, rate){
    const divsStars = divStart.childNodes;
    divsStars.forEach(star => {
        const [svg] = star.childNodes;
        if(star._id <= rate) 
            svg.classList.add('text-yellow-500')
        else
            svg.classList.remove('text-yellow-500');
    });
}

export {colorStarsClick};