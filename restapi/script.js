'use strict';

const getData = () => {
    fetch('https://api.nbp.pl/api/exchangerates/tables/a?format=json')
    .then(response => response.json())
    .then(result => {
        console.log(result)

        result[0].rates.forEach((elem, i) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${++i}</td>
            <td>${elem.currency}</td>
            <td>${elem.mid}</td>
            `
            document.querySelector('table tbody').appendChild(tr)
        });
    })
}
const btn = document.querySelector('button');

btn.addEventListener('click', getData);