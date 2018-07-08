var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/test', function(req, res) {
    res.render('test.ejs');
});

app.get('/news/:id', function(req, res) {
    var news_data = {
        newsId: req.params.id
    };
    res.render('news', {news_data: news_data});
});

app.listen(3000);
