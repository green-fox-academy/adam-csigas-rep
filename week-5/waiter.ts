'use strict';

import { Employee } from "./employee";


class Waiter implements Employee{
    name: string;
    experience: number;
    tips : number;

    constructor(name: string = 'JonDoe',experience: number = 0, tips : number = 0){
        this.name = name;
        this.experience = experience;
        this.tips = tips;
    }

    work() {
        this.experience ++;
        this.tips ++;
    }

}