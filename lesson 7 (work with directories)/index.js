var fs = require('fs');

// remove file
// fs.unlink('text.txt', function() {});

// create directory
// fs.mkdirSync('new-directory');               // Sync
// fs.mkdir('new-directory', function() {});    // Async

// remove directory (if it is empty!)
// fs.rmdirSync('new-directory');               // Sync
// fs.rmdir('new-directory', function() {});    // Async

fs.mkdir('new-directory', function() {
    fs.writeFile('./new-directory/new-file.txt', 'Hello world!', function() {
        console.log('File is created!');
    });
});