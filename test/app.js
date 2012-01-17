var fs = require('fs');
var yui = require('../');
var util = require('util');

yui.compile('function abcdef(aaaaa,bbbbb) { return aaaaa+bbbbb; }', function(err, res) {
   console.log(res);
});

var index = fs.readFileSync('../lib/cibot-yui-compress.js', 'utf8');

yui.compile(index, function(err, res){
   util.puts(res);   
});
