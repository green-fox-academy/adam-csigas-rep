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

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

app.get('/books', (req, res) => {
    let selectAllBooks = 'SELECT book_name FROM book_mast';
    connection.query(selectAllBooks, (err, rows) => {
        res.send(rows);
        console.log(err)
    });
});






app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});