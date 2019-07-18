'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

// we have 18 seconds 25 minutes and 9 hours left

let secondsinaday : number = 3600*24;
let lastseconds : number = currentHours*3600 + currentMinutes*60 + 42;
console.log(secondsinaday - lastseconds);