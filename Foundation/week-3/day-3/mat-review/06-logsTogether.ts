'use strict';
export { };
declare function require(path: string): any;
const fs: any = require('fs');

/* function readLogFile(fileName: string): string {
    try {
        fs.readFileSync(fileName, 'utf-8');
    } catch (error) {
        return '';
    }
}

let fileContent: string = readLogFile('06-logs.txt');

function createLinesBasedOnTextContent(fileContent: string) {
    return fileContent.split('\n');
}

console.log(createLinesBasedOnTextContent(fileContent));

function getIPAdressOfLine(line: string): string {
    return line.split('   ')[1];
}

createLinesBasedOnTextContent(fileContent).forEach(function) (line)) {
    console.log(getIPAddressOfLine(line))
} */