const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Alternatively, we can just use the built-in repeat method
// const repeatString = function (word, times) {
//   if (times < 0) return "ERROR";
//   return word.repeat(times);
// }

module.exports = repeatString;
