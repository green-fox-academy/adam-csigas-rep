let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 10];


function sockMerchant(n, ar) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let unique = ar.filter(onlyUnique); // [10,20,30,50]
  n = ar.length;

  let map = ar.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});

  let mySocksPairs = Object.values(map);

  let result = mySocksPairs.map(e => {
    if (e % 2 === 0) {
      return e / 2;
    } else {
      return e = (e - 1) / 2;
    }
  })
  return result.reduce((a,b) => a+b);
}

/* ar = ar.filter(e => {
  if(e === 10){
    return e;
  }
})

if(ar.length%2 === 0){
  ar = ar.length/2;
}else{
  ar = (ar.length -1)/2;
}  */


