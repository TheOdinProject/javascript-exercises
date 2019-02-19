

const removeFromArray = function(...args) {
    var Arr = args[0];
    newArr = Arr.filter(x=> !args.includes(x));
    return newArr;
}
    


module.exports = removeFromArray
