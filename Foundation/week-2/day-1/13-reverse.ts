// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';
export = {};
//first solution:

//let numList: number[] = [3, 4, 5, 6, 7];
//console.log(numList.reverse());

//second one:

let numList: number[] = [3, 4, 66, 6, 7];
let reverseNum: number[] = [];

for (let i: number = 1; i <= numList.length; i++) {
    reverseNum.push(numList[numList.length - i]);
}
console.log(reverseNum);

/* for (let i: number = numList[numList.length - 1]; i >= numList[0]; i--) {
    reverseNum.push(i);
}
console.log(reverseNum); */

//04.07.19 :D
// If you're reading this, you're breathtaking!