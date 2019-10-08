

function updateToActualResource(resourceModel) {
  resourceModel.resources.forEach(e => {
    if (!e.updatedAt) {
      e.updatedAt = 0;
    }
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
    return [e.updatedAt,e.amount];
  })
}


module.exports = updateToActualResource;

//ez a middleware logika