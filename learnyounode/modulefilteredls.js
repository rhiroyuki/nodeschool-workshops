var fs = require('fs');
var path = require('path');

module.exports = function (folder, file_type, callback) {
  fs.readdir(folder, function(err, files) {
    if(err) return callback(err);
    newList = [];
    files.forEach(function(item) {
      if(path.extname(item) === '.' + file_type) newList.push(item)
    })
    callback(null, newList);
  });
};
