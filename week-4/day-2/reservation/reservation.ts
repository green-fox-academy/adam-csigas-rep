'use strict';


interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}
let dow: string[] = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];

class Reservation implements Reservationy {


    getDowBooking(): string {
        return `${dow[Math.floor(Math.random() * 7)]}`;
    }
    getCodeBooking(): string {
        // Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
        return
    }

}

let fuckaduck: Reservation = new Reservation();

console.log(fuckaduck.getDowBooking());

let randomDah: string = 'POIUZTREWQLKJHGFDSAMNBVCXY9876543210';
let codeLength: number = 8;

console.log(randomDah.charAt((Math.floor(Math.random() * randomDah.length))));

for (let i: number = 0; i < codeLength; i++) {

}

//randomDah(Math.floor(Math.random() * 36 + 1);