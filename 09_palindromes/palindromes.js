const palindromes = function (str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, ""); // Normalize the string

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
