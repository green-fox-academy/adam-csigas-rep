'use strict';

import { AircraftCarrier } from "./carrier";

export class Aircraft {
    type : string;
    Ammo : number;
    maxAmmo : number;
    baseDmg : number;
    ammoStore: number = 10000;
    allDamage : number = 0;

    getType() : string {
        return `This plane is a ${this.type} ${Aircraft.name} .`
    };

    fight(): string {
        if (this.Ammo > 0) {
            let damage: number = this.Ammo * this.baseDmg;
            this.Ammo = 0;
            this.allDamage += damage;
            return `${this.type} now is fighting. It dealt ${damage + ' dmg'} to the enemy . Impressive.`
        } else {
            return `${this.type} has out of ammunition! Refill.`
        }
    }

    refill(howMuchAmmoYouWant: number): string {
        if (howMuchAmmoYouWant < this.ammoStore) {
            let ammoNeeded : number = this.maxAmmo - this.Ammo;
            this.ammoStore -= ammoNeeded;
            this.Ammo = this.maxAmmo;
            return `Ammos refilled. There's ${this.ammoStore} left in the Ammo storage.`
        } else if (howMuchAmmoYouWant >= this.ammoStore ) {

            return `You have remaining ammo. Go and fight!`
        }
    }

}