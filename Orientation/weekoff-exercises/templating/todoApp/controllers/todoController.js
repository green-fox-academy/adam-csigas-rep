module.exports = function(app){
    app.get('/', (req, res) => {
        res.render('home', {
            title : 'Things to do today',
            todo : ['get up', 'survive', 'go back to bed']
        });
    });
}