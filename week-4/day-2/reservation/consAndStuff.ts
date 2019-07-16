'use strict';

class ReservationCons {
    dow: string[];
    randomCharSet: string;
    codeLength: number;

    constructor() {
        this.dow = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
        this.randomCharSet = 'POIUZTREWQLKJHGFDSAMNBVCXY9876543210';
        this.codeLength = 8;
    }

}

export default ReservationCons