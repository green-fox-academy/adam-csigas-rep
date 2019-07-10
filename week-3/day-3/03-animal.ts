/* Create an Animal class
    Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

"use strict";

class Animal {
    static hunger: number = 50;
    static thirst: number = 50;

    eat() {
        Animal.hunger -= 1;
        return Animal.hunger;
    }
    drink() {
        Animal.thirst -= 1;
        return Animal.thirst;
    }
    play() {
        Animal.hunger += 1;
        Animal.thirst += 1;
        return Animal.hunger, Animal.thirst;
    }
}

let myDog: Animal = new Animal();
myDog.play();
console.log(Animal.thirst);

//let's move on. not my solution