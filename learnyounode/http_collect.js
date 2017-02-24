var bl = require('bl');
var http = require('http');


http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, data) {
    if(err) {
      return console.error(err);
    }
    var buffer = data.toString();
    console.log(buffer.length);
    console.log(buffer);
  }));
  res.on('error', console.error);
}).on('error', console.error);
