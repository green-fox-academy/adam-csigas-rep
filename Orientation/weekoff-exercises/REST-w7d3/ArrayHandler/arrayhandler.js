'use strict';

let testarray = [1,2,5,10];

const summer = (array) => {
    let output = 0;
    array.forEach(element => {
        output += element;
    });
    return output;
}

const multiplier = (array) => {
    return array.reduce((prev,curr) => prev * curr);
}

console.log(multiplier(testarray))