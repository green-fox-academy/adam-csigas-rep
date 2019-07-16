'use strict';
export { }

var Airplane = /** @class */ (function () {
    function Airplane() {
        this.flySpeed = 10;
        this.passangers = 100;
    }
    Airplane.prototype.fly = function () {
        return 'I am flying';
    };
    Airplane.prototype.board = function () {
        console.log('Add passangers...');
    };
    return Airplane;
}());
var myAirplane = new Airplane();
console.log(myAirplane.flySpeed);
myAirplane.board();
