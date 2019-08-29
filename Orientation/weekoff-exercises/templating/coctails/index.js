'use strict';

const express = require('express');
const todoController = require('./controllers/coctails');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

todoController(app);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});