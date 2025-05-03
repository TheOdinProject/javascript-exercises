const removeFromArray = function(array, ...args) {
    let newArray = array.filter(item => !args.includes(item));
    return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3)); // Output: [1, 2, 4]

// Do not edit below this line
module.exports = removeFromArray;
