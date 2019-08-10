'use strict';

import { Toy } from "./toy";

export class dottedBall extends Toy {
    color: string;
    size : number;

    constructor(color: string,size : number) {
        super(10, color,);
        this.size = size;
    }
}

/* let myDotted : Toy = new dottedBall('red',100);
console.log(myDotted) */