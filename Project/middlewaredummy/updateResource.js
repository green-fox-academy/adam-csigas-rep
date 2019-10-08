const resourceModel = require('./resourceModel'); // it's data coming from the db !!!!!!!

//console.log(resourceModel)
console.log(Date.now())

function updateToActualResource(resourceModel) {
  resourceModel.resources.forEach(e => {
  let time = Date.now();
  let timeDifference = (time - e.updatedAt); //ms
  let remainder = timeDifference % 60000;
  let passedMinutes = (timeDifference - remainder) / 60000;
  if (passedMinutes < 1) {
    //do nothing
    return;
  } else {
    e.updatedAt = time - remainder;
    e.amount += e.generation * passedMinutes;
    console.log(e)
  }
})
console.log(resourceModel)
}


module.exports = updateToActualResource;

//ez a middleware logika