'use strict';
export { }

declare function require(path: string): any;
const fs = require('fs');

let inputArray: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

let content = fs.readFileSync('swearword.txt', 'utf-8');
let contentBeArray: string[] = content.toString().toLowerCase().split(' ');

let swearWords: string[] = [];
for (let i: number = 0; i < inputArray.length; i++) {
    inputArray[i];
    for (let j: number = 0; j < contentBeArray.length; j++) {
        if (contentBeArray[j] === inputArray[i]) {
            swearWords.push(contentBeArray[j]);
        }
    }
}

console.log(swearWords.length)