//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


//  Example
//function unique(arr) {

//}
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]` */

// solution : I create a list, sort them, and the code I write will check the elements next to each other. If the values equal, one of the element 
// will be deleted. To avoid index changing related issues the code will run from the end of the array.

'use strict';
export { };

function unique(daList: number[] = []): number[] {
    console.log(daList.sort());
    for (let i: number = daList.length; i > 0; i--) {
        if (daList[i] == daList[i - 1])
            daList.splice(i, 1);
    }
    return daList
}
console.log(unique([10, 20, 30, 40, 50, 60, 70, 80, 10, 20, 80]));
