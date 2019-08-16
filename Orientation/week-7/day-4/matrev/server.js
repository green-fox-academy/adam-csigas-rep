'use strict';

const mysql = require('mysql');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'ca-db'
});

app.get('/todos', (req, res) =>{
    connection.query('select * from todos;', (err,rows) => {
        res.send(rows);
    })
})
app.get('/todos/:id', (req, res) =>{
    connection.query('select * from todos where id = ?;', req.params.id, (err,rows) => {
        res.send(rows[0]);
    })
})

app.listen(8080);

//new todo item
let newTodo = {
    name: 'walk the dog',
    status: 0,
    id: 3
}

//reading from sql
connection.query('insert into todos set ?', newTodo, (err, rows) => {
    console.log(rows);
    //console.log(err);
    connection.end();
});