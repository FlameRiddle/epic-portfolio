'use strict';

function calc(){
    const btnvalue = this.innerText

    const resPlace = document.querySelector('input')

    if(btnvalue === 'C'){
        resPlace.value = ""
    }else if(btnvalue === '='){
        resPlace.value = eval(resPlace.value)
    }else{
        resPlace.value += btnvalue
    }
    
}

const btns = document.querySelectorAll('button')

btns.forEach(element => {
    element.addEventListener('click', calc);
});