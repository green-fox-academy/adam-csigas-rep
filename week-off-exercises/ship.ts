'use strict';

import Pirate from "./pirate";
import { createWriteStream } from "fs";

class Ship {
    crew: Pirate[];

    constructor() {
        this.crew = [];
    }

    addPirate(newPirate: Pirate): void {
        if (newPirate.isCaptain === false) {
            this.crew.push(newPirate);
        } else if (newPirate.isCaptain === true && this.checkCaptain() === false) {
            this.crew.push(newPirate);
        } else "This ship has a captain already."
    }

    checkCaptain(): boolean {
        let hasCaptain: boolean = false;
        for (let i: number = 0; i < this.crew.length; i++) {
            let crewMember: Pirate = this.crew[i];
            if (crewMember.isCaptain) {
                hasCaptain = true;
            }
        }
        return hasCaptain;
    }

    getPoorPirates(): string[] {
        let PoorPiratesName: string[] = [];
        for (let i: number = 0; i < this.crew.length; i++) {
            let PoorPirateCheck: Pirate = this.crew[i];
            if (PoorPirateCheck.isLegWooden && PoorPirateCheck.gold < 15) {
                PoorPiratesName.push(PoorPirateCheck.name);
            }
        }
        return PoorPiratesName;
    }
}

let HolyShip: Ship = new Ship();

let pirate01: Pirate = new Pirate('PoorJohn1', 14);
let pirate02: Pirate = new Pirate('RichJohn2', 333);
let pirate03: Pirate = new Pirate('PoorJohn3', 13);
let pirate04: Pirate = new Pirate('RichJohn4', 444);
let pirate05: Pirate = new Pirate('PoorJohn5', 12);
let pirate06: Pirate = new Pirate('RichJohn6', 555);
console.log(pirate01);
console.log(pirate02);
console.log(pirate03);
console.log(pirate04);
console.log(pirate05);
console.log(pirate06);

HolyShip.addPirate(pirate01);
HolyShip.addPirate(pirate02);
HolyShip.addPirate(pirate03);
HolyShip.addPirate(pirate04);
HolyShip.addPirate(pirate05);
HolyShip.addPirate(pirate06);

console.log(HolyShip);

console.log(HolyShip.getPoorPirates());


/*



 - `getGolds()` which returns the sum of gold owned by the pirates of that particular ship
 - `lastDayOnTheShip()` which calls the pirates' `party()` method.
 - `prepareForBattle()` which calls
    - the pirates' `work()` method 5 times
    - then the ship's `lastDayOnTheShip()` method.

*/