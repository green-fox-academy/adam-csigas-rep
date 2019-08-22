'use strict';



// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

export { };


function sweets(shopItems: any[] = ['Cupcake', 2, 'Brownie', false]): string[] {
    if (shopItems.hasOwnProperty("Croissant") === false || shopItems.hasOwnProperty("Ice cream")) {
        shopItems.splice(1, 1, 'Croissant');
        shopItems.splice(3, 1, 'Ice cream');

    }
    return shopItems
}
console.log(sweets())
console.log(sweets())


// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"


/* function sweets(myArray: any[]): any[] {

    if (myArray.hasOwnProperty("Croissant") === false && myArray.hasOwnProperty("Ice Cream") === false) {
        myArray = myArray.splice(1, myArray.length - 1, "Croissant", "Brownie", "Ice cream");
    } else {
        myArray = myArray;
    }
    return myArray;
} */