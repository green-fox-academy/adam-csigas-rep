'use strict';

export class NumberSummer {
    numListA: number[];

    constructor(numListA: number[]) {
        this.numListA = numListA;

    }

    sum(): number {
        let summedNums: number = 0;
        for (let i: number = 0; i < this.numListA.length; i++) {
            summedNums += this.numListA[i];
        }
        return summedNums;
    }
}
