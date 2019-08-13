'use strict';

const mapWith = (arrayElements, callback) => {
    let output = [];
    for (let i = 0; i < arrayElements.length; i++) {
        output.push(callback(arrayElements[i]));
    }
    return output;
}

const addOne = (number) => {
    return number + 1;
}

console.log(mapWith([1, 2, 3], addOne)); //expected result: [2, 3, 4] ... Works.

// Exercise 2:

// Create a callback function which removes every second character from a string
const words = ['map', 'reduce', 'filter'];
const removeSecondLetter = (arrayElements) => {
    let splittedWords = [];
    for (let i = 0; i < arrayElements.length; i++) {
        if (i % 2 == 0) {
            splittedWords.push(arrayElements[i]);
        }
    }
    return splittedWords.join('')
}

console.log(mapWith(words, removeSecondLetter));

// expected result: ['mp','rdc', 'fle']