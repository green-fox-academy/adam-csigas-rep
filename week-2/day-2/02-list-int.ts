/* Create an empty list which will contain names(strings)
 */

'use strict';

export = {};

// Create an empty list which will contain names (strings)

let list = {
    names: [],
};

console.log(list);


//Add William to the list

list.names.push('William');

//Print out whether the list is empty or not

if (list.names.length > 0) {
    console.log("not empty.")
} else {
    console.log("empty.");
}

//Add John to the list

list.names.push('John', 'Amanda');


// Print out the number of elements in the list

console.log(list.names.length);

// Print out the 3rd element

console.log(list.names[2]);

// Iterate through the list and print out each name

for (let i: number = 0; i < list.names.length; i++) {
    console.log(list.names[i]);
}

