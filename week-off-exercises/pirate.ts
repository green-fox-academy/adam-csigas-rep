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

        }
    };

    party() { };

}

let Jack = new Pirate('Jack');

console.log(Jack)


//if a pirate is a captain:

/* work() which increases the amount of gold possessed by that pirate by 10 and decrease the HP by 5.
party() which increases the HP by 10.
if the pirate is not a captain:

work() which increases the amount of gold by 1 and decreases the HP by 1.
party() which increases the HP by 1.
toString() method:

if the pirate has a wooden leg, then the string that is returned by the function must look like this:

Hello, I'm Jack. I have a wooden leg and 20 golds.
If not:

Hello, I'm Jack. I still have my real legs and 20 golds. */