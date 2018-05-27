var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf-8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt', 'utf-8');

myReadShort.on('data', function(chunk) {
    // var file_readed = fs.readFileSync('news.txt', 'utf-8');
    // fs.writeFileSync('news.txt', file_readed + "\n" + chunk);

    console.log("New data have been obtained:");
    myWriteShort.write(chunk);
});