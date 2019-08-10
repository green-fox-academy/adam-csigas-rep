'use strict';

import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
    type : string;
    Ammo : number;
    maxAmmo : number = 8;
    baseDmg : number;

    constructor(Ammo: number = 0) {
        super()
        this.type = 'F16';
        if (Ammo >= this.maxAmmo) {
            this.Ammo = this.maxAmmo; // maxAmmo
        } else {
            this.Ammo = Ammo;
        };
        this.baseDmg = 30;
    }
}
