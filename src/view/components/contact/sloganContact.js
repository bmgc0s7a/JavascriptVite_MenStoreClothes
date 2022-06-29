import { h1 } from "../widgets/h1";

const sloganContact = function(){
    
    const divSlogan = document.createElement('div');
    divSlogan.classList.add('bg-slogan', 'md:h-[500px]', 'h-80', 'flex', 'justify-end', 'flex-col', 'items-center', 'p-7');
    const wordSlogan = ['Be Wise', 'Be Patient', 'Be Serene'];
    const h1Slogan = h1(
        'Let Your Essence And Lifestyle OverFlow', ['text-center', 'text-amber-100', 'uppercase', 'text-2xl']
    );
    const h1SloganNext = h1(
        wordSlogan.at(0), ['text-amber-100', 'uppercase', 'text-4xl', 'p-3']
    );
    let indexSlogan = 1;

    setInterval(()=>{
        if(indexSlogan == 3) indexSlogan = 0
        h1SloganNext.textContent = wordSlogan.at(indexSlogan);
        indexSlogan++;
    }, 5000)
    

    divSlogan.append(h1Slogan,h1SloganNext)

    return divSlogan;
}

export {sloganContact};