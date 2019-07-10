/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post - it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb! */

class postIt {
    backgroundColor: string; //colorcode is a string too...xD 
    text: string;
    textColor: string;

    constructor(inconbackCol: string, incontext: string, incontextColor) {
        this.backgroundColor = inconbackCol;
        this.text = incontext;
        this.textColor = incontextColor;
    }
}

let examplePost01: postIt = new postIt('orange', 'Idea 1', 'blue');
let examplePost02: postIt = new postIt('pink', 'Awesome', 'black');
let examplePost03: postIt = new postIt('yellow', 'Superb', 'green');

console.log(examplePost01);
console.log(examplePost02);
console.log(examplePost03);