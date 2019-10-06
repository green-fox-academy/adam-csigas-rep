const express = require('express');
const app = express();
const PORT = 3100;

//app.use(express.static('assets'));
//app.use(express.json());

function logger(req,res,next) {
  console.log(new Date(), req.method, req.url);
  next();
}

function hello(req,res,next) {
  res.write('Hello \n');
  next();
}

function bye(req,res,next) {
  res.write('Bye \n');
  res.end();
}

app.use(logger);

app.get('/hello',hello,bye);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});