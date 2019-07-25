'use strict';

export default class Pirate {
    name: string;
    gold: number;
    health: number;
    isCaptain: boolean;
    isLegWooden: boolean;

    constructor(name: string, gold: number = 10, health: number = 10, isCaptain: boolean, isLegWooden: boolean) {
        this.name = name;
        this.gold = gold;
        this.health = health;
        this.isCaptain = isCaptain;
        this.isLegWooden = isLegWooden;
    }

}

/* A pirate has a name, an amount of gold and health points, the default value of which is 10.

A pirate might be a captain and may have a wooden leg. */