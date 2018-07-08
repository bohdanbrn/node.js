var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/test.html');
});

app.get('/news/:id', function(req, res) {
    var news_data = {
        newsId: req.params.id
    };
    res.render('news', {news_data: news_data});
});

app.listen(3000);