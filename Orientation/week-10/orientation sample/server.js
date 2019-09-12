'use strict';
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('assets'));

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'aliases' //!!! has to be implemented
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  connection.query(`SELECT alias from aliases
  where alias=?`, [alias], (err, resp) => {
      if (resp.length > 0) {
        res.status(400)
        res.send({
          message: `${alias} alread in use b`
        })
      } else {
        const secret_code = Math.floor(1000 + Math.random() * 9000);
        connection.query(`INSERT into aliases (url, alias, secretCode) VALUES(?,?,?)`, [url, alias, secret_code], (err, rows) => {
          if (err) {
            res.send(err.message)
          } else {
           res.status(201)
           res.send({
             message : "created"
           })
          }
        })
      }
    })
})

app.get('/api/links', (req,res) => {
let allEntries = `SELECT id,url,alias,hitCount FROM aliases`;
  connection.query(allEntries, (err, rows) => {
    if (err) {
      console.log(err);
    }
    //console.log(JSON.parse(JSON.stringify(rows)));
    res.json(rows);
  });
})

connection.connect(error => {
  if (error) {
    console.log(`cannot connect to database.`)
    return;
  }
  console.log('connection established.')
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});