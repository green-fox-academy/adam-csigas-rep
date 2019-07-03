// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

'use strict';

let nameToGreet: string = "Adam";

function greet(nameOfTheGreeting1: string): string {
    return nameOfTheGreeting1 + nameToGreet;
}

console.log(greet("Greetings, dear "));

