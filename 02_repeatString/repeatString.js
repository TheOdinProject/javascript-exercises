const repeatString = function(word, times) {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += word;
  }
  return result;
};

// Test the repeatString function
const repeatedWord = repeatString('apple', 3);
console.log(repeatedWord); // Output: "appleappleapple"
// Do not edit below this line
module.exports = repeatString;
