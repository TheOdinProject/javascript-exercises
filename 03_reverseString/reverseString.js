const reverseString = function(str) {
    const temp = str.split('');
    var newString = ''
    for (i=1; i <= str.length; i++) {
        newString += temp[str.length-i]
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
