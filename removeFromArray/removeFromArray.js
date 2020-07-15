const removeFromArray = function(array, ...args) {
        return array.filter(item => !args.includes(item))
   
}

module.exports = removeFromArray
