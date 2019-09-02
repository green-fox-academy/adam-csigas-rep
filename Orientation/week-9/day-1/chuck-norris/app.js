'use strict';

const URL = 'http://api.icndb.com/jokes/random';
let container = document.querySelector('div');
let btn = document.querySelector('button');

const paragraph = document.createElement("p");
const randomJoke = function () {
    fetch(URL)
        .then(response => response.json())
        .then(myJson =>
            paragraph.innerHTML = `${myJson.value.joke}`);
    container.appendChild(paragraph)
}

btn.addEventListener("click",randomJoke);