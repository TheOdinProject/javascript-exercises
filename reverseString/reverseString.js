const reverseString = function (s) {
  s = s.split("");
  let newWord = [];
  for (let i = s.length - 1; i >= 0; i--) {
    newWord.push(s[i]);
  }
  return newWord.join("");
};

module.exports = reverseString;
