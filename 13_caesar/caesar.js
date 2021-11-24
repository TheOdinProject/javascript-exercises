const caesar = function(string, offSet) {
    let uniNum = 0;
    let shiftedNum = 0;
    let shiftedString = '';
    for (i=0;i<string.length;i++) {
        uniNum = string.charCodeAt(i);   // Get unicode num
        if (uniNum >= 65 && uniNum <= 90 || uniNum >= 97 && uniNum <= 122) {

            shiftedNum = uniNum + offSet    ;    // Shift unicode
            shiftedString += String.fromCharCode(shiftedNum);    // Converts back to character
        } else {
            shiftedString += string[i];  // Change Nothing
        }
    }
    return shiftedString;
};

// Do not edit below this line
module.exports = caesar;
