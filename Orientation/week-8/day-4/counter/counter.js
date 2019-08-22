'use strict';

function countingListElements() {
    let counter = document.querySelectorAll('li');
    let output = document.querySelector('p');

    output.innerText = `The number of elements in the list : ${counter.length} .`;
}

const button = document.querySelector('button');
button.addEventListener('click', countingListElements);

