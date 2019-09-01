'use strict';

const express = require('express');
const path = require('path');
const doMath = require('./arrayhandler')

const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.post('/arrays', doMath);

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});