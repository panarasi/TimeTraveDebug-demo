var fs = require('fs');
var path = require('path');
var vm = require('vm');

process.on('exit', function () {
    if (typeof emitTTDLog === 'function') {
        emitTTDLog(path.join(__dirname, '..', 'dist', 'logs'));
    }
});

var scriptUrl = path.join(__dirname, '..', 'dist', 'index.js');
var scriptBody = fs.readFileSync(scriptUrl, 'utf-8');
console.log('Starting new script');
vm.runInThisContext(scriptBody, { filename: scriptUrl });