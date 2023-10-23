const palindromes = function (string) {
  let result = string
    .toUpperCase()
    .replace(/[_\W]+/g, "")
    .split(" ")
    .join("")
    .split("")
    .join("");
  let reverseResult = string
    .toUpperCase()
    .replace(/[_\W]+/g, "")
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("");
  if (result === reverseResult) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
