const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove non-alphanumeric chars
  return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
