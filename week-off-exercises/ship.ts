'use strict';

import Pirate from "./pirate";

class Ship {
    crew: Pirate[];

    constructor() {
        this.crew = [];
    }

    addPirate(newPirate: Pirate): void {

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

}

/*

 - It should have a list of pirates.
 - You must be able to add new pirates to the ship. It must have only one captain!
 - You must create the following methods:
 - `getPoorPirates()` which returns a list of names containing the pirates that
    - have a wooden leg and have less than 15 golds
 - `getGolds()` which returns the sum of gold owned by the pirates of that particular ship
 - `lastDayOnTheShip()` which calls the pirates' `party()` method.
 - `prepareForBattle()` which calls
    - the pirates' `work()` method 5 times
    - then the ship's `lastDayOnTheShip()` method.

*/