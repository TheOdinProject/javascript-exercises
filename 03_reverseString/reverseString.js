const reverseString = function (word) {
  let charArray = word.split("");
  let revArray = [];
  for (i = charArray.length - 1; i >= 0; i--) {
    revArray.push(charArray[i]);
  }
  return revArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
