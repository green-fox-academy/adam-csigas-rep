'use strict';

import { Toy } from "./toy";

export class Doll extends Toy{
    color : string;

    constructor(color: string){
        super(25,color);
    }
}