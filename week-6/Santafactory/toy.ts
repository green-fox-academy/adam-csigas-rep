'use strict';

export class Toy {
    cost : number;
    color: string;
    owner: string;

    constructor(cost : number, color : string, owner : string = null){
        this.cost = cost;
        this. color = color;
        this. owner = owner;
    }
}
/* 
let myToy : Toy = new Toy(25,'red')
console.log(myToy)
myToy.owner = 'jim';
console.log(myToy) */
