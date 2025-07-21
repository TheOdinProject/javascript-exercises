function repeatString(string, num) {
  if (num < 0) return 'ERROR';
  if (num === 0) return '';
  let repeatedString = '';
  for (let i = 0; i < num; i++) {
    repeatedString += string;
  }
  return repeatedString;
}

// Do not edit below this line
module.exports = repeatString;
