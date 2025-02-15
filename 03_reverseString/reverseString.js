const reverseString = function(string) {
    let stringArray = string.split("");
    let newString = "";
    for (let i = stringArray.length - 1; i >= 0; i--){
            newString += stringArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
