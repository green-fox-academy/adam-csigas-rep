'use strict';

import { Contestant } from "./contestant";
import { Player } from "./player";

export class Race{
    contestants: Contestant[];
    players : Player[];

    constructor(contestants : Contestant[] =[],players : Player[] = []){
        this.contestants = contestants;
        this.players = players;
    }

    startRace() : void {
        //Creating random Order
        let randomOrder: number[] = [];
        for (let i: number = 0; i <= 1000; i++) {
            let randomnumber: number = Math.ceil(Math.random() * this.contestants.length);
            if (randomOrder.indexOf(randomnumber) === -1 && randomOrder.length !== this.contestants.length) {
                randomOrder.push(randomnumber);
            }
        }
        //Set Placements
        for(let i : number = 0; i <this.contestants.length; i++){
            this.contestants[i].setPlacement(randomOrder[i]);
        }

    }
    addContestant(contestant : Contestant): void{
        this.contestants.push(contestant)
    }
}

let race = new Race();
let contestant1 = new Contestant('con1')
let contestant2 = new Contestant('con2')
let contestant3 = new Contestant('realname')
let contestant4 = new Contestant('Ege')
let contestant5 = new Contestant('Adam')
race.addContestant(contestant1)
race.addContestant(contestant2)
race.addContestant(contestant3)
race.addContestant(contestant4)
race.addContestant(contestant5)

race.startRace()

console.log(race.contestants)