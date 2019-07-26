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



export class appleMaker {

    getApple(): string {
        return `apple`;
    }
}

let myApple: appleMaker = new appleMaker();

console.log(myApple.getApple());

/* import { test } from 'tape';
import { appleMaker } from './getApple';

test(t => {
    let myApple: appleMaker = new appleMaker();
    myApple.getApple();
    t.equals(myApple.getApple(), "apple");
    t.end();
});
 */