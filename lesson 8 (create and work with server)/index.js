// connection to the local server
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("Page URL: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Hello world!');
});

server.listen(3000, '127.0.0.1');
console.log('Created server in Port 3000');