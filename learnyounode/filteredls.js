var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var file_type = '.' + process.argv[3]

fs.readdir(folder, function(err, files) {
  if(err) return console.log(err)
  files.forEach(function(item) {
    if(path.extname(item) === file_type) console.log(item)
  })
});
