const palindromes = function (string) {
const changedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
return changedString.split("").reverse().join("") == changedString;
};

// Do not edit below this line
module.exports = palindromes;
