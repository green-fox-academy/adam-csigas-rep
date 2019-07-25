'use strict';

export { };

const fs = require('fs');

let firstArr: string[] = ['apple', 'pear', 'melon']

firstArr.forEach(function (e, i) {
    console.log(e, i);
});

let content = fs.readFileSync('char.txt', 'utf-8');

let contArr: string[] = content.split('\n');

console.log(contArr[0]);
console.log(contArr[1]);
console.log(contArr[1]);

