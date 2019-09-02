'use strict';

const URL = 'http://api.icndb.com/jokes/random';
let container = document.querySelector('div');
let btn = document.querySelector('button');
let counter = 0;

const randomJoke = function () {
    const paragraph = document.createElement("p");
    fetch(URL)
        .then(response => response.json())
        .then(myJson =>
            paragraph.innerHTML = `${myJson.value.joke}`);
    container.appendChild(paragraph)
    if(counter > 5){
        btn.removeEventListener('click',randomJoke);
        console.log("NO MORE JOKES TO YOU!")
    }
    counter++;
}
btn.addEventListener("click", randomJoke);


