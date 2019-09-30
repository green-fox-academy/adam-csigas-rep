'use strict';

function drawrectangle(options) {
  let width = options.width;
  let length = options.length;
  //draw logic
}

drawrectangle({
  width: 100,
  length: 50
})

//Problem : there is nothing in our code that checks
// that width and length passed along in our code

//solution : interface

interface Rectangleoptions {
  width: number;
  length: number;
  height?: number; //option parameter
}

function drawrectangleInterface(options: Rectangleoptions) {
  let width = options.width;
  let length = options.length;
  if (options.height) {
    let height = options.height;
  }
  //draw logic
}

drawrectangleInterface({
  width: 100,
  length: 50
})

// interface can only be used whe you use ts-code