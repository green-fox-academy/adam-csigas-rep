'use strict';

import Flower from './flower';
import Tree from './tree';

class Garden {
    plants: (Flower | Tree)[];

    constructor() {
        this.plants = [];
    }

    addNewPlant(plant: Flower | Tree) {
        this.plants.push(plant);
    }

    needWaterOrNot() {
        let thirstyPlants: number = 0;
        for (let i: number = 0; i < this.plants.length; i++) {
            if (this.plants[i].water < 5 && this.plants[i] instanceof Flower) {
                thirstyPlants++;
            } else if (this.plants[i].water < 10 && this.plants[i] instanceof Tree) {
                thirstyPlants++;
            }
        }
    }
}