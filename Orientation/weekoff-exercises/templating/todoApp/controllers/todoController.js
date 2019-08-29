module.exports = function(app){
    app.get('/', (req, res) => {
        res.render('home', {
            title: 'Hello world again!'
        });
    });
}