const express = require('express');
const app = express();
const PORT = 3100;
const apiRouter = express.Router();

//app.use(express.static('assets'));
//app.use(express.json());
app.use(logger)

function logger(req,res,next) {
  if(req.url === '/login' || '/register'){
    next();
  }
  if(req.url === '/hello'){
    console.log(new Date(), req.method, req.url);
  }
}

function hello(req,res,next) {
  res.write('Hello \n');
  next();
}

function bye(req,res,next) {
  res.write('Bye \n');
  res.end();
}

/* apiRouter.use(logger);
app.use('/api',apiRouter);
app.use(hello,bye); */

//app.use(logger);

app.get('/hello',hello,bye);
app.get('/ege',hello,bye);
app.get('/jann',hello);
app.get('/jani',bye); 



app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

