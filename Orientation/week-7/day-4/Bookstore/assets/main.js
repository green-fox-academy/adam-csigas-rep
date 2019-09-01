'use strict';

const body = document.querySelector("body");
const xhr = new XMLHttpRequest(); //here is object human

xhr.onreadystatechange = function () {
    const bookNames = JSON.parse(xhr.responseText);
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            for (let i = 0; i < bookNames.length; i++) {
                let p = document.createElement('p');
                p.textContent = bookNames[i].book_name;
                body.appendChild(p);
            }
        }
    }
}
    xhr.open('GET', 'http://localhost:3000/books');
    xhr.send('OK!');
