const reverseString = function (str) {
  const splitStr = str.split("");
  let result = "";
  for (let i = splitStr.length - 1; i >= 0; i--) {
    result += splitStr[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
