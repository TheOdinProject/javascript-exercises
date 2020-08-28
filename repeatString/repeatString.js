const repeatString = function (s, n) {
  let newString = "";
  if (n < 0) {
    newString = "ERROR";
  } 

  for (let i = 0; i < n; i++) {
    newString = newString + s;
  }
  return newString;
};

module.exports = repeatString;
