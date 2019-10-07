const express = require('express');
const app = express();
const PORT = 3100;
const resourceModel = require('./resourceModel');



app.post('/resourcecheck',(req,res) => {
  res.send({})
})


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

