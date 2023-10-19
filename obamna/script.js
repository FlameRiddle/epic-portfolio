'use strict';
const output = document.querySelector('main');
const btn = document.querySelector('button')
const voices = ['back-alley-abortion.mp3', 'gay-straight-men-women-folks-with-disability.mp3', 'hello.mp3', 'i-drank-beer-heavily-and-tried-drugs-enthusiastically.mp3', 'im-barack-obama.mp3', 'racist.mp3', 'thats-america.mp3', 'these-asians-worse-than-the-whites.mp3', 'this-is-barack.mp3', 'trying-to-get-laid.mp3'];
const obamav = new Audio('voices/' + voices[Math.floor(Math.random() * voices.length)]);
const mactivities = ['breakfasting😋', 'jogging','flipping grinding🛹','showering😳','scrolling tiktok:3','fighting racism','<img src="obam.jpg">']
const aactivities = ['lunching😋', 'skateboarding', 'balling😋','gaming','scrolling tiktok:3','politicing','fighting racism','drugs😋','gambling','<img src="obam.jpg">']
const eactivities = ['dinnering😋', 'balling🏀','gaming','showering😳','scrolling tiktok:3','fighting racism','gambling','<img src="obam.jpg">']
const nactivities = ['eeping 😴','eeping 😴','eeping 😴','eeping 😴','eeping 😴','eeping 😴','snoring😴','snoring😴','snoring😴','wherebouts unknown','scrolling tiktok:3','scrolling tiktok:3','eating pussy🍴','<img src="obam.jpg">']

let activity = ''
const d = new Date()
btn.addEventListener('click', () => {
    output.innerHTML = ''
    output.innerHTML += '<h3>obama is currently:</h3>'
    switch(d.getHours()){
        case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11:
        activity = nactivities[Math.floor(Math.random() * nactivities.length)];
        break;
        case 12: case 13: case 14: case 15: case 16: case 17:
        activity = mactivities[Math.floor(Math.random() * mactivities.length)];
        break;
        case 18: case 19: case 20: case 21: case 22: case 23:
        activity = aactivities[Math.floor(Math.random() * aactivities.length)];
        break;
        case 0: case 1: case 2: case 3:
        activity = eactivities[Math.floor(Math.random() * eactivities.length)];
        break;
    }
    output.innerHTML += '<h1>' + activity + '</h1>'
    obamav.play()
})
