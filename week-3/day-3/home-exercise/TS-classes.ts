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

class Point {
    x: number; //fields
    y: number;
    
    draw() {
        // ...
    }

    getDistance(another: Point) {
        //...
    }
}
