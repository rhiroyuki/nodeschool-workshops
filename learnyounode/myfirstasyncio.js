var fs = require('fs')

file_content = fs.readFile(process.argv[2],'utf8',
  function(err, data) {
    if(err) return console.log(err)
    console.log(data.split('\n').length-1)
});
