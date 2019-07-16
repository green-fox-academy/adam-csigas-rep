'use strict';


interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}


class Reservation implements Reservationy {

    getDowBooking(): string {
        const dow = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
        return `for ${dow[Math.floor(Math.random() * 7)]}`;
    }
    getCodeBooking(): string {
        const randomDah = 'POIUZTREWQLKJHGFDSAMNBVCXY9876543210';
        const codeLength = 8;
        let randomChar: string = '';
        for (let i: number = 0; i < codeLength; i++) {
            randomChar += randomDah.charAt((Math.floor(Math.random() * randomDah.length)));
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