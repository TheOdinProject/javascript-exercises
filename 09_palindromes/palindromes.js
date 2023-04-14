const palindromes = function (string) {
    let str = string.toLowerCase().replace(/[^a-z]/g, "");
    let reverse = str.split("").reverse().join("");

    return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
