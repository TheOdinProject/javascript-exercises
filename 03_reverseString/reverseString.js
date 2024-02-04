const reverseString = function (string) {
  let array = string.split("");
  let reversedString = "";
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    reversedString += array.pop();
  }
  return reversedString;

  // Much cleaner solution :)
  // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
