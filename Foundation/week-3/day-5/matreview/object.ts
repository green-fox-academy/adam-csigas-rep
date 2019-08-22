/* primitve type is when you can store a number in one cell */

'use strict';

let myFavNumber: number = 4;


// complex type is when you can not store a number in only one cell e.g: array. String cannot be primitive, because you have to store a lot off
//additional properties.

let n = 5;

// n.length <- it will not gonna work

let s = 'apple';
let numbers: number[] = [1, 2, 3, 4, 5];

console.log(s.length);
console.log(numbers.length);

class GFApprentice {
    private name: string;
    private email: string;

    constructor(n: string, e: string) {
        this.name = n;
        this.email = e;
    }

    public sendEmail(innenContent: string): void {
        //there is no return, in the background we send an email thats why the void
        let content = '';
        content += 'Hello' + this.name + ',\n\n';
        content += innenContent + '\n';
        content += 'Kisses,\n';
        content += 'Adam';
        console.log(this.email, content);
    }
}

let app1 = new GFApprentice('Apprentice Joe', 'joe@hotmail.com');

app1.sendEmail('I am so glad you blablablabal');

