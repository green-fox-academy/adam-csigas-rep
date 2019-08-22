'use strict';
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.post('/dountil/:action', (req, res) => {
    if (req.params.action === "sum") {
        res.json({
            "result": (req.body.until * (req.body.until + 1)) / 2
        })
    }

});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});