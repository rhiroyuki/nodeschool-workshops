var fs = require('fs')

file_content = fs.readFileSync(process.argv[2], 'utf8')
console.log(file_content.split('\n').length-1)
