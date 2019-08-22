'use strict';

interface Flyable {
    land(): string;
    fly(): string;
    takeoff(): number;
}

abstract class Vehicle {
    abstract productionDate: number;
    abstract color: string;
    abstract speedMax: number;
}

export { Flyable };
export { Vehicle };