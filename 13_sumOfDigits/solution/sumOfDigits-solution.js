const sumOfDigits = function (num) {
  let sum = 0;

  // Loop through each digit of the number and add it to sum
  while (num > 0) {
    sum += num % 10; // Adds the last digit
    num = Math.floor(num / 10); // Removes the last digit
  }

  return sum;
};

module.exports = sumOfDigits;