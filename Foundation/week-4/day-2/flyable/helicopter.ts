'use strict';

import { Vehicle, Flyable } from "./flyable";



class Helicopter extends Vehicle implements Flyable {
    productionDate: number;
    color: string;
    speedMax: number;

    constructor() {
        super();
    }


    land(): string {
        return
    }
    fly(): string {
        return
    }
    takeoff(): number {
        return
    }
}

export default Helicopter;