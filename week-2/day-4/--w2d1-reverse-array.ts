// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';
export = {};

let numList: number[] = [3, 4, 5, 6, 7];

console.log(numList.reverse());

let reverseNum: number[] = [];

/* for (let i: number = numList[5]; i >= 0; i--) {

    for (let j: number = 0 ; j <= numList[5]; j++) {
        reverseNum[j] += numList[i];
    }

}
console.log(reverseNum); */
//have no idea why?!