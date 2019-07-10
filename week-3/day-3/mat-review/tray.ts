import Cookie from './cookie';

class Tray {
    cookies: Cookie[];

    bakeThemAll() {
        this.cookies.forEach(function (cookie) {
            cookie.bakeMe();
        })
    }

    bakeThemAllAgain() {
        this.cookies.forEach(cookie => {
            cookie.bakeMe();
        })
    }

    bakeThemAllWithAFor() {
        for (let i = 0; i < this.cookies.length; i++) {
            this.cookies[i].bakeMe();
        }
    }

}

let myFirstTray: Tray = new Tray();
let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla'); // this is also called instance
let mySecondCookie: Cookie = new Cookie('spider', true, 'chocolate');

myFirstTray.cookies.push(myFirstCookie, mySecondCookie);
myFirstTray.bakeThemAll();

console.log(myFirstTray);
console.log(myFirstCookie.checkMyStatus());
console.log(myFirstCookie instanceof Cookie);
