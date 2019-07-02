/* 
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A */

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let ListB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

if (ListA[3] === ListB[3]) {
    console.log("Both lists contains the given element.");
} else {
    console.log("The given element of A and B are not the same.");
}

ListB.splice(3, 1)

ListA.splice(5, 0, "Kiwifruit");

console.log(ListA.indexOf('Avocado'));
console.log(ListB.indexOf('Durian'));

ListB.splice(ListB.length - 1, 0, "Passion Fruit", "Pomelo");

console.log(ListA[2]);
