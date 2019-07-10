"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brandName) {
        this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }
    Car.BuildCar = function (brandName) {
        return new Car(brandName);
    };
    Car.BuyCar = function (brandName, ownerName) {
        var car = new Car(brandName);
        car.ownerName = ownerName;
        return car;
    };
    Car.prototype.startCar = function () {
        this._startEngine();
    };
    Car.prototype._startEngine = function () {
    };
    Object.defineProperty(Car.prototype, "seriesNumber", {
        get: function () {
            return this._seriesNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "ownerName", {
        get: function () {
            return this._ownerName;
        },
        set: function (name) {
            // Do some validation on the name
            this._ownerName = name;
        },
        enumerable: true,
        configurable: true
    });
    Car.SERIES_NUMBER = 0;
    return Car;
}());
var car = Car.BuyCar('Mazda', 'Slava');
car.startCar();
console.log('Brand number:', car.brandName);
console.log('Series number:', car.seriesNumber);
console.log('Owner name:', car.ownerName);
var car2 = Car.BuyCar('Mazda', 'Other Name');
console.log('Brand number 2:', car2.brandName);
console.log('Series number 2:', car2.seriesNumber);
console.log('Owner name:', car2.ownerName);
/* Shortcut in code01:
public brandName: string;
    constructor(brandName: string){
        this.brandName = brandName;
    }

    constructor(public brandName: string){
    }
*/
