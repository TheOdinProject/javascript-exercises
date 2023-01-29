const reverseString = function(str) {
    let inputStr = "";
    var reverseStr = "";
    for (let i = 0; i < inputStr.length; i++) {
        reverseStr += inputStr[inputStr.length - 1 - i];
    }
    return reverseStr;
};

// console.log(reverseString())

// Do not edit below this line
module.exports = reverseString;
