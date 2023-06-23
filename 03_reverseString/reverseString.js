const reverseString = function(string) {
    const newArray = Array.from(string).reverse();
    var returnString = ""

    for (i = 0; i < newArray.length; i++) {
        returnString += newArray[i];
    }


    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
