'use strict';

import { Player } from "./player";
import { Contestant } from "./contestant";

export class Bet {
    amount : number;
    player : Player;
    contestant : Contestant;
    betId : number; //random between 1000-9999

    constructor(amount: number, player: Player, contestant: Contestant, betId: number = Math.floor(Math.random() * 9000) + 1000){
        this.amount = amount;
        this.player = player;
        this.contestant = contestant;
        this.betId = betId;
    }

}