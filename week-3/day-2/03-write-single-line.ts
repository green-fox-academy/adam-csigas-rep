// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error 03-myfile: "Unable to write file: my-file.txt"

export { };

declare function require(path: string): any;

const fs = require('fs');


let addContent: string = 'Adam Csigas';

fs.writeFileSync('03-myfile.txt', addContent)



console.log(fs.readFileSync('03-myfile.txt', 'utf-8'));