'use strict';

import StringedInstrument from "./instrument";


class ElectricGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;

    constructor(numberOfString = 6, name = 'Electric Guitar') {
        super();
        this.name = name;
        this.numberOfStrings = numberOfString;
    }

    sound(): string {
        return 'Twang';
    }

    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} .`);
    };
}

class BassGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;

    constructor(numberOfString = 4, name = 'Bass Guitar') {
        super();
        this.name = name;
        this.numberOfStrings = numberOfString;
    }

    sound(): string {
        return 'Duum-duum-duum';
    }

    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} .`);
    };
}

class Violin extends StringedInstrument {
    name: string;
    numberOfStrings: number;

    constructor(numberOfString = 4, name = 'Violin') {
        super();
        this.name = name;
        this.numberOfStrings = numberOfString;
    }

    sound(): string {
        return 'Screech';
    }

    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} .`);
    };
}
console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');

let stringedShoSho1: ElectricGuitar = new ElectricGuitar();
let stringedShoSho2: BassGuitar = new BassGuitar();
let stringedShoSho3: Violin = new Violin();


console.log(stringedShoSho1);
console.log(stringedShoSho2);
console.log(stringedShoSho3);

console.log('Test 1 Play');
stringedShoSho1.play();
stringedShoSho2.play();
stringedShoSho3.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
