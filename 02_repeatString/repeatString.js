const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let myWord = "";
  if (times > 0) {
    for (let i = 0; i < times; i++) {
      myWord += word;
    }
  }
  return myWord;
};
repeatString("hey", 0);

// Do not edit below this line
module.exports = repeatString;
