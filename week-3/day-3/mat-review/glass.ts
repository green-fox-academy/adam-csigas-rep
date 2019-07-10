'use strict';

class Glass {
    private volume: number = 10;
    private content: number;

    constructor(content: number) {
        if (content > this.volume) {
            this.content = this.volume;
        }
    }
}


class Human {
    name: string;

    constructor(name: string) {
        this.name = name; // variable shadowing
    }
}

let bela: Human = new Human('Bela');
let Mari: Human = new Human('Mari');

console.log(bela);
console.log(Mari);