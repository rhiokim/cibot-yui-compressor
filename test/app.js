var app = require('../');

app.compile('function abcdef(aaaaa,bbbbb) { return aaaaa+bbbbb; }', function(err, res) {
   console.log(res);
});
