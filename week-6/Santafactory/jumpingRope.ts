'use strict';

import { Toy } from "./toy";

export class dottedBall extends Toy {
    color: string;
    size: number;

    constructor(color: string, size: number) {
        super(15, color);
        this.size = size;
    }
}