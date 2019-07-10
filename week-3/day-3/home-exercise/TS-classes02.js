"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brandName) {
        this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }
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
    Car.SERIES_NUMBER = 0;
    return Car;
}());
var car = new Car('Mazda');
car.startCar();
console.log(car.brandName);
console.log('Series number: ', car.seriesNumber);
/* Shortcut in code01:
public brandName: string;
    constructor(brandName: string){
        this.brandName = brandName;
    }

    constructor(public brandName: string){
    }
*/ 
