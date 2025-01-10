// sumOfDigits.js
function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
  }

  return sum;
}
  // Do not edit below this line
module.exports = sumOfDigits;
  