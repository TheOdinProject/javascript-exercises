const repeatString = function(string, loops) {
  if (loops < 0) return 'ERROR';
  
  let repeatedString = '';
  for (i = 0; i < loops; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
