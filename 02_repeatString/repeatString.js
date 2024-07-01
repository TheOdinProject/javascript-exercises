const repeatString = function(repeatedWord, repeatCount) {
  let output = ''
  if (repeatCount < 0) {
    return 'ERROR';
  }
  while (repeatCount > 0) {
    output += repeatedWord;
    repeatCount--;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
