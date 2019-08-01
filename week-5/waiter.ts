'use strict';

import { Employee } from "./employee";


export class Waiter extends Employee{
    tips : number;

    constructor(name: string = 'JonDoe',experience: number = 0, tips : number = 0){
        super();
        this.name=name;
        this.experience=experience;
        this.tips = tips;
    }

    work() {
        this.experience ++;
        this.tips ++;
    }

}