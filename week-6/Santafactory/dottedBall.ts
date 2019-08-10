'use strict';

import { Toy } from "./toy";

export class DottedBall extends Toy {
    color: string;
    size : number;

    constructor(color: string,size : number) {
        super(10, color,);
        this.size = size;
    }
}

let myDotted : Toy = new DottedBall('red',100);
console.log(myDotted) 