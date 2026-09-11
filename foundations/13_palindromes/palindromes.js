const palindromes = function (string) {
    const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = cleaned.split("").reverse().join("");
    return reversedString === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
