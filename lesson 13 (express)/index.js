var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Home page');
});

app.get('/blog', function(req, res) {
    res.send('Archive blog page');
});

app.get('/blog/:id', function(req, res) {
    res.send('Single blog page ID is - ' + req.params.id);
});

app.listen(3000);