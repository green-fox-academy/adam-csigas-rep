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

//----------CARGO

const cargoMax = 12500;
let actualCargo = {
    "caliber25": 0,
    "caliber30": 0,
    "caliber50": 0,
    "shipstatus": "empty",
    "ready": false
}

app.get('/rocket', (req, res) => {
    res.send(actualCargo);
});
app.get('/rocket/fill', (req, res) => {
    let storage = (req.query.amount / cargoMax) * 100;
    let ammoReq = Number(req.query.amount);
    const loading = function () {
        switch (req.query.caliber) {
            case ".50":
                actualCargo.caliber50 += ammoReq;
                break;
            case ".30":
                actualCargo.caliber30 += ammoReq;
                break;
            case ".25":
                actualCargo.caliber25 += ammoReq;
                break;
        }
    }
    if (req.query.caliber !== undefined && req.query.amount !== undefined) {
        if (actualCargo.shipstatus === "empty") {
            loading();
            actualCargo.shipstatus = `${storage}%`;
            res.send({
                "received": req.query.caliber,
                "amount": req.query.amount,
                "shipstatus": `${storage} %`,
                "ready": false
            });
        } else {
            loading();
            actualCargo.shipstatus = `${parseFloat(actualCargo.shipstatus) + storage} %`;
            res.send({
                "received": req.query.caliber,
                "amount": req.query.amount,
                "shipstatus": `${actualCargo.shipstatus}`,
                "ready": false
            });
        }
    } else {
        res.send({
            "error": "Some data might missing. Please check and provide them."
        })
    }

});


module.exports = app;