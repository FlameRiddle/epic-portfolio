'use strict';

const btn1 = document.querySelector('#add')
const btn2 = document.querySelector('#sub')
const p = document.querySelector('p')
let counter = 0
p.innerText = counter

btn1.addEventListener('click', () => {
    counter++
    p.innerText = counter
})
btn2.addEventListener('click', () => {
    if(counter == 0){} else{
        counter--
        p.innerText = counter
    }
})