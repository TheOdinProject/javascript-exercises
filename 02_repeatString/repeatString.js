const repeatString = function (string, repititions) {
  let newString = "";

  if (repititions < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repititions; i++) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
