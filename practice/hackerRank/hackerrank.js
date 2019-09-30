'use strict';

function simpleArraySummer(array) {
  let sum = array.reduce((a, b) => a + b);
  return sum;
}

function compareTriplets(a, b) {
  let pointsA = 0;
  let pointsB = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pointsA++;
    } else if (a[i] < b[i]) {
      pointsB++;
    }
  }
  return [pointsA, pointsB];
}

function diagonalDifference(arr) {
  let topDiagonal = 0;
  let bottomDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        topDiagonal += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        bottomDiagonal += arr[i][j];
      }
    }
  }

  let output = topDiagonal - bottomDiagonal;
  if (output < 0) {
    return output * -1;
  }
  return output;
}

let numberArray = [1, 2, 3, -3, -6, 0];

function plusMinus(arr) {
  let pos = 0, neg = 0, zero = 0, length = arr.length;
  arr.forEach(n => {
    if (n > 0)
      pos++;
    else if (n < 0)
      neg++;
    else
      zero++;
  })
  console.log((pos / length).toFixed(6))
  console.log((neg / length).toFixed(6))
  console.log((zero / length).toFixed(6))
}
/* function plusMinus(arr) {
  let length = arr.length;
  let cases = {
    positive: 0,
    negative: 0,
    zero: 0
  }
  arr.forEach(e => {
    if (e < 0) {
      cases.negative += 1 / length;
    } else if (e > 0) {
      cases.positive += 1 / length;
    } else {
      cases.zero += 1 / length;
    }
  });
  return Object.values(cases);
} */


function staircase(n) {
  let myStares = '';
for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(i+j <= n-2){
      myStares += ' ';
    }else{
      myStares += '#';
    }
  }
  if(i < n-1){
    myStares += '\n';
  }
}
console.log(myStares)
}


function miniMaxSum(arr) {
  arr = arr.sort((a, b) => { return a - b })
  let minimum = 0, maximum = 0;
  for(let i = 0; i < arr.length-1; i++){
    minimum += arr[i];
  }
  for(let i = 1; i < arr.length; i++){
    maximum += arr[i];
  }
  return console.log(minimum, maximum)
}


/* function birthdayCakeCandles(ar) {
  let blowable = ar.reduce((a,b) => {
    return Math.max(a,b);
  });
  
  let candles = 0;
  ar.forEach(e => {
    if(e === blowable){
      candles++;
    }
  })
  return console.log(candles);
}  */

function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  let result = ar.filter(e => e === max);
  return result.length;
}

let s = '23:45:54PM';

function timeConversion(s) {
  let hours = s.substring(0, 2);
  let hoursNum = parseInt(Number(hours));
  let daytime = s.substring(8, 10);
  let daytimeRemover = s.split(daytime).join('');
  let output = '';

  if (daytime === 'AM' && hoursNum < 12) {
    output = daytimeRemover;
  } else if (daytime === 'AM' && hoursNum === 12){
    let hoursNumString = '00';
    output = daytimeRemover.replace(hours,hoursNumString);
  } else if (hoursNum > 0 && daytime === 'PM' && hoursNum < 12) {
    let hoursNumString = (hoursNum += 12).toString();
    output = daytimeRemover.replace(hours, hoursNumString)
  }else if(hoursNum >= 12 && daytime ==='PM'){
    output = daytimeRemover;
  }
  return output;
}

console.log(timeConversion(s))



/* if (isNaN(Number(simpleinput.substring(0, 2)))){
  let meh = simpleinput.replace(simpleinput[0], twentyfourify);
  console.log(`result1 : ${meh}`)
}else if(simpleinput.substring(0,2) === '00'){
  simpleinput = simpleinput.split('PM').join('').split('AM').join('');
  console.log(`result2 : ${simpleinput}`)
}else {
  simpleinput = simpleinput.split('PM').join('').split('AM').join('');
  twentyfourify = (Number(simpleinput.substring(0,2)) + 12).toString();
  meh = simpleinput.replace(simpleinput.substring(0, 2), twentyfourify);
  console.log(`result2 : ${simpleinput}`)
} */