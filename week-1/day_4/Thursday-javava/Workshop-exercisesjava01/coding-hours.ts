'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//

/* 
Coding hours a day = x
Working days of the semester = y (we are not counting with the vacation days!)
weekend = z
*/ 

let x : number = 6;
let y : number = 17*5;



// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
// Hours In Semester = HIS

let HIS : number = (x*y);

//console.log(HIS);

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

// Total Average Hours = TAH

let TAH : number = 52*17;

//console.log(TAH);

console.log((HIS/TAH)*100);