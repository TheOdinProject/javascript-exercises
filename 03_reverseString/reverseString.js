const reverseString = function (string) {
  return string.split("").reverse().join("");
};

let isReverse = reverseString("thom");
console.log(isReverse);

// Do not edit below this line
module.exports = reverseString;
