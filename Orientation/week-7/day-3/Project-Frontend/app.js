'use strict';
const express = require('./node_modules/express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

function factorial(num) {
    let fact = 1;
    for (let i = 0; i < num; i += 1) {
        fact *= i + 1;
    }
    return fact;
}


app.get('/doubling', (req, res) => {
    if (isNaN(Number(req.query.input))) {
        res.json({
            "error": "Please provide an input!"
        })
    } else {
        res.json({
            "received": Number(req.query.input),
            "result": Number(req.query.input * 2)
        })
    }
});

app.get('/greeter', (req, res) => {

    if (req.query.name === undefined && req.query.name === undefined) {
        res.json({
            "error": "Please provide a name and a title!"
        });
    } else if (req.query.name === undefined) {
        res.json({
            "error": "Please provide a name!"
        });
    } else if (req.query.title === undefined) {
        res.json({
            "error": "Please provide a title!"
        });
    } else {
        res.json({
            "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
        });
    }
});

app.get('/appenda/:word', (req, res) => {
    if (req.params.word === undefined) {
        res.status(404);
    } else {
        res.json({
            "appended": req.params.word + "a"
        })
    }
});

app.post('/dountil/:action', (req, res) => {
    if (req.params.action === "sum") {
        res.json({
            "result": (req.body.until*(req.body.until+1))/2
        })
    }
    if (req.params.action === "factor") {
        res.json({
            "result": factorial(req.body.until)
        })
    }
});










app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});