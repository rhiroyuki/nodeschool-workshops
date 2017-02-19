var mymodule = require('./modulefilteredls.js');

var folder = process.argv[2];
var file_type = process.argv[3];

function callback(err, data) {
  if(err) {
    console.log(err);
  }
  else {
    data.forEach(function(element, index) {
      console.log(element)
    });
  }
};

mymodule(folder, file_type, callback);
