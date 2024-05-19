const removeFromArray = function(...args) {

    if (args.length < 1) {
        return;
    }

    let array = args.shift();
    let result = [];

    for (let i = 0 ; i < array.length ; i++) {
        if (args.indexOf(array[i]) == -1) {
            // Not part of the excluded elements
            result.push(array[i]);
        }
    }
    return (result);
};

// Do not edit below this line
module.exports = removeFromArray;
