const resourceModel = require('./resourceModel'); // it's data coming from the db !!!!!!!

console.log(resourceModel)


console.log(Date.now())

resourceModel.resources.forEach(e => {
  let time = Date.now();
  let difference = (time - e.updatedAt); //ms
  let remainder = difference % 60000;
  let passedMinutes = (difference - remainder) / 60000;
  console.log(passedMinutes)
  if (passedMinutes < 1) {
    //do nothing
  } else {
    e.updatedAt = time - remainder;
    e.amount += e.generation * passedMinutes;
  }
  console.log(e)
})