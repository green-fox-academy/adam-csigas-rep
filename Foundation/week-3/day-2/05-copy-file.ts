// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
export { };
declare function require(path: string): any;
const fs = require('fs');



function copyFileToAnotherFile(pathOriginal: string, pathNew: string): boolean {
    try {
        let content = fs.readFileSync(pathOriginal, 'utf-8');
        pathNew = fs.writeFileSync(pathNew, content);
        return true;
    } catch (e) {
        return false;
    }
}
//copyFileToAnotherFile('05-original.txt', '05-copied.txt');

if (copyFileToAnotherFile('05-original.txt', '05-copied.txt') === true) {
    console.log('The copy was successful.');
} else console.log('Something went wong.');

