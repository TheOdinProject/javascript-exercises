const reverseString = function(string) {

    const splitString = string.split("");
    let reverse = "";

    for (let i = (splitString.length - 1); i >= 0; i--) {
        const pullString = splitString[i];
        reverse += pullString;
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString; 
