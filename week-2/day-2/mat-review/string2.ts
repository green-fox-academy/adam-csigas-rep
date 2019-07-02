'use strict';

export = {};

let greeting: string = 'hello create class create';

// let greetingTheRightWay : string = greeting.replace('create', 'Create'); /g - global /

let greetingTheRightWay: string = greeting.replace(/create/g, 'Create');


console.log(greetingTheRightWay);


let textToSlice: string = "1234567890";
let spliced: string = textToSlice.slice(4, -3);
console.log(spliced);