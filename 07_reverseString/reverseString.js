const reverseString = function(string) {
    
  let reversedWord = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord += string[i];
  }
  return reversedWord;
    
};

// Do not edit below this line
module.exports = reverseString;
