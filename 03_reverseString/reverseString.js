const reverseString = function(str) {
    var newString = '';
    for (i = str.length -1; i >=0; i--) {
        newString += str[i];
    }
    return newString;
};
    
// Do not edit below this line
module.exports = reverseString;
