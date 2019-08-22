'use strict';

import { Bet } from "./bet";
import { Contestant } from "./contestant";

export class Player{
    name : string;
    account : number; //total money that the player has
    bets : Bet[];

    constructor(name : string, account : number = 100, bets : Bet[] = []){
        this.name = name;
        this.account = account;
        this.bets = bets;
    }

    makeBet(contestant : Contestant, amount : number) : void {
        if(amount <= this.account){
            this.bets.push(new Bet(amount, this.name, contestant))
            this.account -= amount;
        }else {
            console.log('Bet cannot be made.')
        }
    }
}

let myplayer : Player = new Player('JonDoe');

let mycont : Contestant = new Contestant();

myplayer.makeBet(mycont, 25);
myplayer.makeBet(mycont, 13);

console.log(myplayer.bets)