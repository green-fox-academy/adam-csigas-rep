'use strict';
export { }

declare function require(path: string): any;
const fs = require('fs');

let inputArray: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

let content = fs.readFileSync('swearword.txt', 'utf-8');

let contentBeArray: string[] = content.toString().toLowerCase().split(' ');



console.log(contentBeArray)


/*

Swear words
Write a method which can read and parse a file containing not so family friendly text. The method must remove all the given words from the file and return the amount of the removed words.

Example
Example file can be found here.

Input

['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
Output

17

*/