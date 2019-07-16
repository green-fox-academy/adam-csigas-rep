'use strict';

class ReservationCons {
    dow: string[];
    randomDah: string;
    codeLength: number;

    constructor() {
        this.dow = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
        this.randomDah = 'POIUZTREWQLKJHGFDSAMNBVCXY9876543210';
        this.codeLength = 8;
    }

}

export default ReservationCons