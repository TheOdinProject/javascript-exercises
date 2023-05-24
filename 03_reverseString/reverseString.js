const reverseString = function(stringToBeReversed) {
    let reversedStringArray = [stringToBeReversed.split("")];
    let reversedString = "";

    for (let i = reversedStringArray[0].length-1; i >= 0; i--) {
        reversedString += reversedStringArray[0][i];
    }   
    return reversedString;



};
// Do not edit below this line
module.exports = reverseString;
