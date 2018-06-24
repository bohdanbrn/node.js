var fs = require('fs');

// connection to the local server
var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('Page URL: ' + req.url);
    var myReadShort;
    if (req.url === '' || req.url === '/' || req.url === '/index') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        myReadShort.pipe(res);
    } else if (req.url === "/test" || req.url === "/test/") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        myReadShort = fs.createReadStream(__dirname + '/test.html', 'utf-8');
        myReadShort.pipe(res);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        myReadShort = fs.createReadStream(__dirname + '/404.html', 'utf-8');
        myReadShort.pipe(res);
    }

});

server.listen(3000, '127.0.0.1');
console.log('Port 3000');