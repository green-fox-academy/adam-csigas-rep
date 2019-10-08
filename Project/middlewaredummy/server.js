const express = require('express');
const app = express();
const PORT = 3100;
const resourceModel = require('./resourceModel');
const resourcesMiddleware = require('./resourceMiddleware');

app.use(resourcesMiddleware);

app.post('/resourcecheck',(req,res) => {
})

app.post('/resourceupdate', (req, res) => {

});

app.post('/login', (req,res) => {
  
})

app.get('/yolo')


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

