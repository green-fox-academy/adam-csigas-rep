'use strict';

export { };

const fs = require('fs');
let content = fs.readFileSync('char.txt', 'utf-8');


let contArr: string[] = content.split('\n');

/* content = fs.readFileSync('countchar.txt', 'utf-8');
contArr = content.split("");
for (let i: number = 0; i < content.length; i++) {
    characterCount = 0;
    currentCharacter = content[i];

 */


