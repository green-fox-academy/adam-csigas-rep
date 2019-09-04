const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    if (req.query.somemessage === undefined) {
        res.status(400)
            .json({
                "error": "I am Groot!"
            })

    } else {
        res.json({
            "received": req.query.somemessage,
            "translated": "I am Groot!"
        })
    }
});

app.get('/yondu', (req, res) => {
    if (req.query.time === "0" ||
        req.query.time === "" ||
        req.query.distance === "0" ||
        req.query.distance === "" ||
        isNaN(Number(req.query.distance)) ||
        isNaN(Number(req.query.time))) {
            res
        res.status(400).send({
            "error": "Either given number is not correct or the given value is not a number."
        })
    } else if (!isNaN(Number(req.query.time)) && !isNaN(Number(req.query.distance))) {
        res.send({
            "distance": req.query.distance,
            "time": req.query.time,
            "speed": req.query.distance / req.query.time
        })
    }
});

module.exports = app;