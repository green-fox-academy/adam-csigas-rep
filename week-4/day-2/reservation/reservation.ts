'use strict';

import ReservationCons from "./consAndStuff";

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation extends ReservationCons implements Reservationy {
    dow: string[];
    randomDah: string;
    codeLength: number;

    getDowBooking(): string {
        return `for ${this.dow[Math.floor(Math.random() * 7)]}`;
    }

    getCodeBooking(): string {
        let randomChar: string = '';
        for (let i: number = 0; i < this.codeLength; i++) {
            randomChar += this.randomDah.charAt((Math.floor(Math.random() * this.randomDah.length)));
        } return `Booking# ${randomChar} `
    }

}

let fuckaduck1: Reservation = new Reservation();
let fuckaduck2: Reservation = new Reservation();
let fuckaduck3: Reservation = new Reservation();
let fuckaduck4: Reservation = new Reservation();
let fuckaduck5: Reservation = new Reservation();

console.log(fuckaduck1.getCodeBooking() + fuckaduck1.getDowBooking());
console.log(fuckaduck2.getCodeBooking() + fuckaduck2.getDowBooking());
console.log(fuckaduck3.getCodeBooking() + fuckaduck3.getDowBooking());
console.log(fuckaduck4.getCodeBooking() + fuckaduck4.getDowBooking());
console.log(fuckaduck5.getCodeBooking() + fuckaduck5.getDowBooking());