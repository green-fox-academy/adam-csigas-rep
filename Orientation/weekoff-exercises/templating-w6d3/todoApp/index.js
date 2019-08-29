'use strict';

const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

todoController(app);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});