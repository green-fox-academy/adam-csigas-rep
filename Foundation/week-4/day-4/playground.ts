'use strict';

/*
Anagram
Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that.

*/

let myword1: string = 'finder';
let myword2: string = 'friend';

let myword1Ar: string[] = myword1.split('').sort();
let myword2Ar: string[] = myword2.split('').sort();

let myword1Alpha: string = myword1Ar.join();
let myword2Alpha: string = myword1Ar.join();

console.log(myword1Alpha === myword2Alpha);
