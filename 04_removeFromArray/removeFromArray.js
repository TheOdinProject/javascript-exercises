const removeFromArray = function (...args) {
    const arr = args[0];
    return arr.filter(values => !args.includes(values));
};

// Do not edit below this line
module.exports = removeFromArray;
