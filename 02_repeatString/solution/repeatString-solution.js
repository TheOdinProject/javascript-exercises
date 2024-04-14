const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

module.exports = repeatString;

// You can also use the repeat() string method for this solution. However, to understand looping properly, consider the above code as the main solution. Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

// ALTERNATIVE SOLUTION //
// const repeatString = function (string, num) {
//   return string.repeat(num);
// };
