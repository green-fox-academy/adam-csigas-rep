'use strict';

export default class Pirate {
    name: string;
    gold: number;
    health: number;
    isCaptain: boolean;
    isLegWooden: boolean;

    constructor(name: string, gold: number = 10, health: number = 10, isCaptain: boolean = (Math.random() <= 0.5), isLegWooden: boolean = (Math.random() <= 0.5)) {
        this.name = name;
        this.gold = gold;
        this.health = health;
        this.isCaptain = isCaptain;
        this.isLegWooden = isLegWooden;
    }

    work(): void {
        if (this.isCaptain) {
            this.gold += 10;
            this.health -= 5;
        } else {
            this.gold++;
            this.health--;
        }
    };

    party() {
        if (this.isCaptain) {
            this.health += 10;
        } else {
            this.health++;
        };

    }

    toSring() {
        if (this.isLegWooden) {
            `Hello, I'm ${this.name} . I have a wooden leg and ${this.gold} golds.`
        } else {
            `Hello, I'm ${this.name}. I still have my real legs and ${this.gold} golds.`
        }
    }


}

let Jack = new Pirate('Jack');

console.log(Jack.health)
Jack.work()
console.log(Jack.health)




/* if the pirate has a wooden leg, then the string that is returned by the function must look like this:

Hello, I'm Jack. I have a wooden leg and 20 golds.
If not:

Hello, I'm Jack. I still have my real legs and 20 golds.  */