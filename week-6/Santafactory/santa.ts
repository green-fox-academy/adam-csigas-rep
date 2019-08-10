'use strict';

import { Toy } from "./toy";

export class Santa {
    bag: Toy[];
    children: string[];

    constructor(bag: Toy[] = [], children: string[] = []) {
        this.bag = bag;
        this.children = children;
    }

    addToBag(name: string, color: string, size: number): void {
        //calls santafactory produce method
    }

    bringToChildren(listOfNames: string[]): void {
    }
}