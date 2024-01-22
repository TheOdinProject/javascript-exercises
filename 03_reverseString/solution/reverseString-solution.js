const reverseString = function (string) {
  return string.split("").reverse().join("");

  // alternatively, you may consider the following solution 
  // that uses only basic syntax as oppose to string methods.

  // const reverseString = function(input) {
  //   let result = "";
  //   for (let i = input.length - 1; i >= 0; i--) {
  //       result += input[i];
  //   }
  //   return result;
  // };
};

module.exports = reverseString;
