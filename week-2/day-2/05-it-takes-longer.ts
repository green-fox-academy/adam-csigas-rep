// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

'use strict';
export = {};

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let quoteCorrectly: string = quote.replace(/It you/g, 'It always takes longer than you');


console.log(quoteCorrectly);