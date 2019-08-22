'use strict';
export { };

interface Flyable {
    flySpeed: number;
    fly(): string;
}
interface HasPassengers {
    passangers: number;
    board(): void;
}

class Airplane implements Flyable, HasPassengers {
    flySpeed: number = 10;
    passangers: number = 100;



    fly(): string {
        return 'I am flying';
    }

    board(): void {
        console.log('Add passangers...');
    }
}

let myAirplane: Airplane = new Airplane();

console.log(myAirplane.flySpeed);
myAirplane.board();

let bird: Flyable = {
    fly: function (): string { return 'a' },
    flySpeed: 100,
};