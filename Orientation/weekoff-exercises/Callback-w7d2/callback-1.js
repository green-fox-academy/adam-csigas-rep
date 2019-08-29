'use strict';

const mapWith = (array, callback) => {
    let output = [];
    array.forEach(element => {
        output.push(callback(element));
    });
    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (character) => {
    let modifiedWords = [];
    for(let i = 0; i < character.length; i++){
        if(i %2 === 0){
            modifiedWords.push(character[i])
        }
    }
    return modifiedWords.join('')
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']