'use strict';

class Animal {
    hunger: number;
    thrist: number;

    constructor(hunger = 50, thirst = 50) {
        this.hunger = hunger;
        this.thrist = thirst;
    }

    eat() {
        this.hunger--;
    }
    drink() {
        this.thrist--;
    }

    play() {
        this.hunger++;
        this.thrist++;
    }
}

/* let myAnimal = new Animal();
console.log(myAnimal)
myAnimal.eat()
console.log(myAnimal)
myAnimal.drink()
console.log(myAnimal)
myAnimal.play()
console.log(myAnimal) */

