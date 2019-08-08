'use strict';

export class Aircraft{
    type : string;
    maxAmmo: number;
    baseDmg: number;
    currentAmmo: number;

    constructor(type: string, maxAmmo : number, baseDmg : number,){
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.baseDmg = baseDmg;
        this.currentAmmo = 0;
    }

    fight() : number {
        let damage : number = this.baseDmg * this.currentAmmo;
        this.currentAmmo = 0;
        return damage;
    }

    refill(ammo : number) : number{
        let neededAmmo = this.maxAmmo-this.currentAmmo;
        let remainingAmmo = ammo;
        if(ammo >= neededAmmo){
            this.currentAmmo = this.maxAmmo;
            remainingAmmo = ammo - neededAmmo;
        }else {
            this.currentAmmo += ammo;
            remainingAmmo = 0;
        }
        return remainingAmmo;
    }

    getType() : string{
        return this.type;
    }

    getStatus(): string{
        return ``
    }

    isPriority() : boolean {
        return this.type === 'f35';
    }
}

