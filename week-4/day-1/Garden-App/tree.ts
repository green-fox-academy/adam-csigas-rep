'use strict'
import Plant from './plant';

class Tree extends Plant {

    constructor(color: string, water: number) {
        super(color, water);
    }

    watering(amount: number): void {
        this.water = this.water + (amount * 0.4);
    }
}

export default Tree;