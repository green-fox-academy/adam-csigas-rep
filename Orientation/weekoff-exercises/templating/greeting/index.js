'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/greet/', (req, res) => {
    res.render('home', {
        name: req.query.name || 'beautiful person'
    });
});




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});