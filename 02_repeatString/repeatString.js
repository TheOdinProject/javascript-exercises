const repeatString = function (string, num) {
  let addedStrings = "";

  if (num < 0) {
    return (addedStrings = "ERROR");
  } else {
    for (num; num > 0; num--) {
      addedStrings += string;
    }
  }
  return addedStrings;
};

// Do not edit below this line
module.exports = repeatString;
