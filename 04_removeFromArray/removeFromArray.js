const removeFromArray = function(arg, ...args) {
    const newArray = [];
    return arg.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
