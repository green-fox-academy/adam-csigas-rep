// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';
export { };
declare function require(path: string): any;
const fs = require('fs');

/* let content = fs.readFileSync('06-logs.txt', 'utf-8');
let datumlessContent: string = content.split("Mon Feb  5 10:47:12 2018"); */

let logContent: string = fs.readFileSync('06-logs.txt', 'utf-8');
let logArray = logContent.split('\n');

function buildIPArrays(logArray: string[]): string[] {
    let uniqueIPsArray: string[] = [];
    let IP: string;
    logArray.forEach(function (value, index) {
        IP = value.split(' ')[8];
        if (uniqueIPsArray.indexOf(IP) < 0) {
            uniqueIPsArray.push(IP);
        }
    });
    return uniqueIPsArray;
}
buildIPArrays()

/* //function uniqueIP(): any {
let allTheIP: string[] = [""];
for (let i: number = datumlessContent.length - 1; i > 0; i--) {
    allTheIP += datumlessContent.length[i];
}
//  return allTheIP
//}

console.log(allTheIP) */