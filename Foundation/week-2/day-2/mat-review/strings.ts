'use strict';

export = {};

let single: string = '';
let double: string = "";
let backTick: string = `Today is ${(100 ** 2) - 1}`;

/* 'single quotes'
"doddododouble quotes"
`this is a string too` */

console.log(single, double, backTick);

/* methods of string:
string.length
string.replace
console.log(string.toUpperCase().toLowerCase());

//eg we want to put 1 letter to uppercase

*/

// toUpperCaserAtIndex("appletree", 3) -> "appLetree"

function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);
    let replaceUpperCase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index + 1);
    return prefix.concat(replaceUpperCase).concat(suffix);
}

console.log(toUpperCaseAtIndex("appletree", 0));

let lettersOfWord: string[] = toUpperCaseAtIndex("appletree", 0).split(' ');

console.log(lettersOfWord);







