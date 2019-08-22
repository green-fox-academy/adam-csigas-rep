'use strict';

const body = document.querySelector("body");
const xhr = new XMLHttpRequest(); //here is object human

xhr.open('GET', 'http://localhost:3000/books');

xhr.onload = function() {
    const bookNames = JSON.parse(xhr.responseText);
    for(let i = 0; i < bookNames.length; i++){
        let p = document.createElement('p');
        p.textContent = bookNames[i].book_name;
        body.appendChild(p);
    }
}

function sendGetRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            }
            else {
                console.log('something went wrong');
            }
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

sendGetRequest('http://localhost:3000/books', console.log);
console.log('szia')
/* xhr.open('GET', 'http://localhost:3000/books');
xhr.send('OK!'); */