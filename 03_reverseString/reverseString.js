const reverseString = function (strInput) {
  const len = strInput.length;
  let word = "";
  for (let i = 0; i < len; i++) {
    word = word + strInput[len - i - 1];
  }
  return word;
};

// Do not edit below this line
module.exports = reverseString;
