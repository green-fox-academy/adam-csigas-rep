'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password:'password',
    database:'ca-db'
});

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