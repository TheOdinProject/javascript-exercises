const reverseString = function(string) {
    idxLenString = string.length - 1;
    new_str = '';
    for (i = idxLenString; i >= 0; i--) {
        new_str = new_str + string[i]
    }
    return new_str;
};

// Do not edit below this line
module.exports = reverseString;
