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
  database: ''
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

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});