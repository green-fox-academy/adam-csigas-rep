/* Create an empty list which will contain names(strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name */

'use strict';

export = {};

let list: string[] = [];

console.log(list.length);

list[0] = 'Williams';

if (list.length > 0) {
    console.log("It's not empty.")
} else {
    console.log("It's empty.")
}

list.push('John', 'Amanda');

console.log(list.length);
console.log(list[2]);

list.forEach(function (item) {
    console.log(item);
})
