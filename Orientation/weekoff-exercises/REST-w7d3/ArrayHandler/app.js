'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('meh');
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});