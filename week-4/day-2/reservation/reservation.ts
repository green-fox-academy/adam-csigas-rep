'use strict';

import ReservationCons from "./constants";

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation extends ReservationCons implements Reservationy {
    dow: string[];
    randomCharSet: string;
    codeLength: number;

    getDowBooking(): string {
        return `for ${this.dow[Math.floor(Math.random() * 7)]}`;
    }

    getCodeBooking(): string {
        let randomCharGenerator: string = '';
        for (let i: number = 0; i < this.codeLength; i++) {
            randomCharGenerator += this.randomCharSet.charAt((Math.floor(Math.random() * this.randomCharSet.length)));
        } return `Booking# ${randomCharGenerator} `
        // Is it possible to put this loop in constant.ts?
    }

}

let fuckaduck1: Reservation = new Reservation();
let fuckaduck2: Reservation = new Reservation();
let fuckaduck3: Reservation = new Reservation();
let fuckaduck4: Reservation = new Reservation();
let fuckaduck5: Reservation = new Reservation();
let fuckaduck6: Reservation = new Reservation();
let fuckaduck7: Reservation = new Reservation();
let fuckaduck8: Reservation = new Reservation();
let fuckaduck9: Reservation = new Reservation();
let fuckaduck10: Reservation = new Reservation();

console.log(fuckaduck1.getCodeBooking() + fuckaduck1.getDowBooking());
console.log(fuckaduck2.getCodeBooking() + fuckaduck2.getDowBooking());
console.log(fuckaduck3.getCodeBooking() + fuckaduck3.getDowBooking());
console.log(fuckaduck4.getCodeBooking() + fuckaduck4.getDowBooking());
console.log(fuckaduck5.getCodeBooking() + fuckaduck5.getDowBooking());
console.log(fuckaduck6.getCodeBooking() + fuckaduck6.getDowBooking());
console.log(fuckaduck7.getCodeBooking() + fuckaduck7.getDowBooking());
console.log(fuckaduck8.getCodeBooking() + fuckaduck8.getDowBooking());
console.log(fuckaduck9.getCodeBooking() + fuckaduck9.getDowBooking());
console.log(fuckaduck10.getCodeBooking() + fuckaduck10.getDowBooking());