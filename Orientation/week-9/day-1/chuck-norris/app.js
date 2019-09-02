'use strict';

const URL = 'http://api.icndb.com/jokes/random';
let container = document.querySelector('div');
let btn = document.querySelector('button');

const randomJoke = function () {
    const paragraph = document.createElement("p");
    fetch(URL)
        .then(response => response.json())
        .then(myJson =>
            paragraph.innerHTML = `${myJson.value.joke}`);
    container.appendChild(paragraph)
}

btn.addEventListener("click",randomJoke);