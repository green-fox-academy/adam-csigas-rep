'use strict';

export = {};

let person = {
    name: 'John',
    age: 21,
    friends: [],
    greeting: function () {
        console.log('Hi my name is John ;)');
    },
    plsDontHateMe: {
        name: "Mark"
    },
    address: "HOME",
};


let personCopyWithReference = person;
let wholeNewPersonWithTheInitialValues = { ...person };

console.log(person);
console.log(personCopyWithReference);
person.name = "new Name";
console.log('new name of the personCopy', personCopyWithReference.name);

wholeNewPersonWithTheInitialValues.name = 'NEW JOHN';
console.log('new person name ->', person.name);

console.log(person.name);
console.log(person.plsDontHateMe.name);

person.greeting();

console.log(Object.keys(person));

console.log(person[Object.keys(person)[0]]);


if (person.hasOwnProperty("address")) {
    console.log(person.address)
}

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("namez"));


let isItRaining: boolean = false;

if (isItRaining) {
    console.log(":)");
} else {
    console.log(":(");
}