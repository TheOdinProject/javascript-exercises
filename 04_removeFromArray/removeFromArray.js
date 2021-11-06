const removeFromArray = function() {
    let array = arguments[0];
    for (i = arguments[0].length - 1; i >= 0; i--) {
        for (j = 1; j < arguments.length; j++) {
            if (arguments[j] === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
