const removeFromArray = function(array, ...args) {
    return array.filter(number => !args.includes(number));
}

// Do not edit below this line
module.exports = removeFromArray;
