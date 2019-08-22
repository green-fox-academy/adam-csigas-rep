'use strict';

export class Contestant {
    name : string; // name of the contestant
    placement : number;

    constructor(name : string = 'Contestant', placement: number =0){
        this.name = name;
        this.placement = placement;
    }

    setPlacement(value : number) : void {
            this.placement += value;
    }

    toString() : string{
        return `${this.name} has finished on place : ${this.placement} .`
    }
}

let testContestant1 = new Contestant();
let testContestant2 = new Contestant();
let testContestant3 = new Contestant();
let testContestant4 = new Contestant();
