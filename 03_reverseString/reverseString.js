const reverseString = function(stringToReverse) {

    let reverseString = '';
    for (let iter = stringToReverse.length - 1; iter >= 0; iter--) {
        reverseString = reverseString + stringToReverse[iter];
    };
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
