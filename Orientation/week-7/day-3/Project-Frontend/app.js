const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

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








app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});