'use strict';
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
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

app.get('/books', (req, res) => {
  let bookTitles =
  `SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast 
  JOIN author ON book_mast.aut_id = author.aut_id 
  JOIN category ON book_mast.cate_id = category.cate_id 
  JOIN newpublisher ON book_mast.pub_id = newpublisher.pub_id`;

  connection.query(bookTitles, (err, rows) => {
    res.send(rows);
    console.log(err)
  });
});


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

/* 
different queries
WHERE cate_descrip = "category"
 */