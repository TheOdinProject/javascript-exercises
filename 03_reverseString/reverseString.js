const reverseString = function(str) {
    // let splitString =  str.split(''); // turn string into an array of characters
    // let reverseArray = splitString.reverse(); // reverse array
    // let reversedString = reverseArray.join(''); // join characters into a string
    // return reversedString;
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
