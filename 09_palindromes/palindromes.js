const palindromes = function (word) {
  const validCharacter = "abcdefghijklmnopqrstuvwxyz0123456789";

  const oldStr = word
    .toLowerCase()
    .split("")
    .filter((item) => validCharacter.includes(item))
    .join("");

  // reverse version
  const newStr = oldStr.split("").reverse().join("");

  return newStr === oldStr;
};

// Do not edit below this line
module.exports = palindromes;
