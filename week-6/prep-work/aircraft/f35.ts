'use strict';

import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
    type: string;
    Ammo: number;
    maxAmmo: number = 12;
    baseDmg: number;

    constructor(Ammo : number = 0) {
        super()
        this.type = 'F35';
        if(Ammo >= this.maxAmmo){
            this.Ammo = this.maxAmmo; //maxAmmo
        }else {
            this.Ammo = Ammo;
        };
        this.baseDmg = 50;
    }
}
