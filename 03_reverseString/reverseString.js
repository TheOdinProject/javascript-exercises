const reverseString = function(string) {
    let reverse = '';
    for (let i = string.length; i > 0; i--) {
        reverse += string.charAt(i-1);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
