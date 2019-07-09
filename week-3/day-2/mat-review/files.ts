declare function require(path: string): any;

const fs = require('fs');

let content;
try {
    content = fs.readFileSync('fruits.txt', 'utf-8');
} catch (e) {
    content = '';
}

console.log(content[0]);
