const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  }
  let newStr = "";
  for (i = 0; i < num; i++) {
    newStr = newStr + str;
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
