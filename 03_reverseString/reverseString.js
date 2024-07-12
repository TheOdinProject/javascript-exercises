const reverseString = function(text) {
    let reversedString='';
    for (let index = text.length; index >= 0; index--) {
        reversedString+=text.charAt(index);
    }
    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
