const palindromes = function (myString) {
    const strippedString = myString.replace(/[^a-z0-9]/gi, '').toUpperCase();
    const reversedString = strippedString.split("").reverse().join("").toUpperCase();
//    console.log(strippedString)
//    console.log(reversedString)
    return strippedString === reversedString ? true: false;
};

palindromes("racecar!")

// Do not edit below this line
module.exports = palindromes;
