const reverseString = function(input) {
  let array = input.split("");
  let reverseString = '';
  for (let j = array.length - 1; j >= 0; j--) {
    reverseString += array[j];
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
