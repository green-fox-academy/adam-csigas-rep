'use strict';

import { Employee } from "./employee";


class Restaurant {
    name: string;
    foundationYear: number;
    workers: Employee[];

    guestsArrived() {
        //It  should instruct all employees to`work`
    }

    hire() {
        // - We should be able to`hire` an employee which will add it to the list of`employees`
    }
}