//var num = 5;
//var nums = [50 , 71, 12, -22];

// var nums = [50 , 71, 12, -22]; but index values goes from 0! So 50s index is 0, 71s index is 1, etc.

var nums = [100, 25, 12, 72] ;

var num = 23;

function setup() {
    createCanvas (400, 400);
}

function draw() {
    background(0);

    ellipse(100,200, num, num);
}

// reference datas are missing so it's not functional just yet!