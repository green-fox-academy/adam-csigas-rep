'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ferrilata'
});
//connecting to database
connection.connect(error => {
  if (error) {
    console.log(`cannot connect to database.`)
    return;
  }
  console.log('connection established.')
})
//rendering index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//listing auction items, dropdown bid items
app.get('/api/items', (req,res) => {
  const items = `select * from items;`
  connection.query(items, (err, rows) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({
        items : rows
      });
    }
  });
})

app.post('/api/items/:id/bids',(req,res) => {
  const {name, amount} = req.body;
  connection.query('SELECT * FROM items WHERE id =?', req.params.id, (err,resp) => {
    if(err){
      res.sendStatus(500);
    }else {
      if(new Date() > resp[0].expiryDate){
        res.send({
          message: "The auction is over!"
        })
      }else{
        res.send({message : 'yolo'});
      }
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

//console.log(resp[0].title);