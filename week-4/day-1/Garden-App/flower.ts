'use strict';
import Plant from './plant';

class Flower extends Plant {

    constructor(color: string, water: number) {
        super(color, water);
    }

    watering(amount): void {
        this.water = this.water + (amount * 0.75);
    }
}

export default Flower;
