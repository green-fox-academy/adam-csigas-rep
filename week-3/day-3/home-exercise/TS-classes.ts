/* interface Point {
    x: number,
    y: number,
    draw: () => void
}

let drawPoint = (point: Point) => {
    // ...
}

let getDistance =  (pointA: Point, pointB: Point) {
    // ...
}

drawPoint({
    x: 1,
    y: 2,
}) */

//the 4 different stuff above highly related, they should be part of 1 Unit. in OOP we call this a Class

export { };

class Point {
    private x: number; //fields. private - to control access
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
let point = new Point(1, 2);
// this will cause problems if in class is private point.x = 3;
point.draw();

/* what if we have:
let point = new Point();
point.x = 1;
point.x = 2;
point.x = 3;
...
...
...
in OOP there is a concept called : Constructor. Every class can have one.
*/