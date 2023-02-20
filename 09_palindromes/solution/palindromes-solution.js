const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return processedString.split("").reverse().join("") == processedString;
};

module.exports = palindromes;
