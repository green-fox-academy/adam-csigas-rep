'use strict';

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
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
const removeSecondLetter = (array) => {
    let splittedWords = [];
    for (let i = 0; i < words.length; i++) {
        let splittedChar = [];
        for (let j = 0; j < words[i].length; j++) {
            if (j % 2 == 0) {
                splittedChar.push(words[i][j]);
            }
        }
        splittedWords.push(splittedChar.join(''))
    }
    return splittedWords
}

console.log(mapWith(words, removeSecondLetter));

// expected result: ['mp','rdc', 'fle']