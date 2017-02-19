arguments = process.argv.slice(2)
var total = 0
arguments.forEach(function(item, index, array) {
    total += parseFloat(item)
})
console.log(total)
