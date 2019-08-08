'use strict';

import { Aircraft } from "./aircraft";

export class Carrier{
    aircrafts : Aircraft[];
    ammoStorage : number;
    hp: number;

    constructor( ammoStorage : number, hp: number) {
        this.ammoStorage = ammoStorage;
        this.hp = hp;
        this.aircrafts = [];

    }

    add(myAircraft : Aircraft) : void {
        this.aircrafts.push(myAircraft);
    }

    fill(){
        for(let i : number = 0; i < this.aircrafts.length; i++){
            let current : Aircraft = this.aircrafts[i];
            if(current.isPriority() === true){
                this.ammoStorage = current.refill(this.ammoStorage);
            }
        }

        for (let i: number = 0; i < this.aircrafts.length; i++) {
            let current: Aircraft = this.aircrafts[i];
                this.ammoStorage = current.refill(this.ammoStorage);
            }
        
    }

    fight(enemy: Carrier) : void {
        /* for(let i = 0; i < this.aircrafts.length; i++){
            let dmg: number = this.aircrafts[i].fight();
            enemy.hp -= dmg;
        } */

        this.aircrafts.forEach(function(oneAircraft){
            enemy.hp -= oneAircraft.fight();
        })
    }
}