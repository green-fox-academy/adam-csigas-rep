const express = require('express');

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.sendFile('views/index.html', {root : __dirname});
    //res.render('server', )
} );

app.use(express.static('assets'));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});


