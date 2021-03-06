var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('login-success', {data: req.body});
});

app.get('/news/:id', function(req, res) {
    var page_data = {
        newsId: req.params.id,
        filter: req.query.filter,
        city: req.query.city
    };
    console.log(req.query);
    res.render('news', {page_data: page_data});
});

app.listen(3000);
