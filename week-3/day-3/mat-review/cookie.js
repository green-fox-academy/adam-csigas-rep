"use strict";
exports.__esModule = true;
var Cookie = /** @class */ (function () {
    function Cookie(shape, hasSparkles, flavor) {
        this.status = 'raw';
        this.shape = shape;
        this.hasSparkles = hasSparkles;
        this.flavor = flavor;
        this.id = Cookie.lastId;
        Cookie.lastId++;
    }
    Cookie.prototype.bakeMe = function () {
        this.status = 'baked to perfection';
    };
    //how to make status accessable
    Cookie.prototype.checkMyStatus = function () {
        return this.status;
    };
    Cookie.howAreYouToday = function (mood) {
        return 'I am doing ${mood}';
    };
    Cookie.lastId = 1;
    return Cookie;
}());
var myFirstCookie = new Cookie('elephant', false, 'vanilla'); // this is also called instance
var mySecondCookie = new Cookie('spider', true, 'chocolate');
myFirstCookie.bakeMe();
console.log(myFirstCookie);
console.log(Cookie.howAreYouToday('exceptional'));
Math.random();
Math.PI;
//single responsibility principal: one class do one method
// static e.g
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.animalType = 'mammals';
    return Dog;
}());
exports["default"] = Cookie;
