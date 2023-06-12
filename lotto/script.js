'use strict';

const btn = document.querySelector('button')

const parent = document.querySelector('.balls')

const addElement = (elem, number) => {
    const element = document.createElement(elem)
    element.textContent = number
    parent.appendChild(element)
}

btn.addEventListener('click', () => {
    const numbercount = 6
    parent.innerText = ''
    const maxValue = 42
    const tabRandomNumbers = []
    const tabFinalNumbers = []
    for(let i = 0; i < numbercount; i++){
        console.log(i)
    }
})