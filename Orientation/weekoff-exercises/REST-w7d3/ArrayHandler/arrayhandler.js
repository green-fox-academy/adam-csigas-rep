'use strict';

const summer = (array) => {
    let output = 0;
    array.forEach(element => {
        output += element;
    });
    return output;
}

const multiplier = (array) => {
    return array.reduce((prev, curr) => prev * curr);
}

const double = (array) => {
    return array.map(e => e * 2);
}

function doMath(req, res) {
    let responseObj = {
        "what": req.body.what
    }
    if (req.body.what === undefined) {
        responseObj = {
            "error": "no numbers provided"
        }
    } else {
        switch (req.body.what) {
            case "sum":
                responseObj["result"] = summer(req.body.numbers);
                break;
            case "multiply":
                responseObj = {
                    "result": multiplier(req.body.numbers)
                }
                break;
            case "double":
                responseObj = {
                    "result": double(req.body.numbers)
                }
                break;
        }
        res.send(result);
    }
}

module.exports = doMath;




