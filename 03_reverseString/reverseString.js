const reverseString = function(string) {
    reversedArray = []
    for (let i = string.length - 1; i >= 0; i--) {
        reversedArray.push(string[i])
    }
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
