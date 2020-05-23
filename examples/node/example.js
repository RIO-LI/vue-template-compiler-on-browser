require('lodash');
var webpackNumbers = require('./vtc.js');
var out = function() {
    process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.hello());
};
out();