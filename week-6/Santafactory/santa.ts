'use strict';

import { Toy } from "./toy";
import { SantaFactory } from "./santaFactory";

export class Santa {
    bag: Toy[];
    children: string[];
    toyMaker : SantaFactory;

    constructor() {
        this.bag = [];
        this.children = [];
        this.toyMaker = new SantaFactory();
    }

    addToBag(name: string, color: string, size?: number): void {
        this.bag.push(this.toyMaker.produce(name, color, size));
    }

    bringToChildren(listOfNames: string[]): void {
        if(this.bag.length > 0){
            for(let i : number = 0; i < listOfNames.length; i++){
                //e'fáradtam, iterájjá'
            }
        }
    }
}