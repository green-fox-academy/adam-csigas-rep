//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

'use strict';
export { }

let reverseNum: number[] = [];
let myNumbers: number[] = [3, 4, 5, 6, 7];

function bubble(reverseOrderedNums: number[] = []): number[] {
    for (let i: number = myNumbers[myNumbers.length - 1]; i >= myNumbers[0]; i--) {
        reverseNum.push(i);
    }
    console.log(reverseNum)
    return reverseNum
}

console.log(bubble([1, 2, 3, 4, 5]))

/* let myNumbers: number[] = [3, 4, 5, 6, 7];
let reverseNum: number[] = [];

for (let i: number = myNumbers[myNumbers.length - 1]; i >= myNumbers[0]; i--) {
    reverseNum.push(i);
}
console.log(reverseNum); */