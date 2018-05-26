var fs = require('fs');

// asynchronous method
// // read file
// var file_readed = fs.readFileSync('text.txt', 'utf-8');
// var message = 'This is asynchronous method!\n' + file_readed;
// // edit or create new(if not exist) file
// fs.writeFileSync('text.txt', message);

// synchronous method
// read file
var file_readed = fs.readFile('text.txt', 'utf-8', function(err, data) {
    console.log(data);
});
// edit or create new(if not exist) file
fs.writeFile('text.txt', 'This is synchronous method!', function(err, data) {});

console.log("Test");