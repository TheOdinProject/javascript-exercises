const convertToCelsius = function(temp) {
  if (typeof temp !== 'number') {
    return 'ERROR';
  }
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  if (typeof temp !== 'number') {
    return 'ERROR';
  }
  return Math.round((temp * (9 / 5)) + 32 * 10) / 10;
};
console.log(convertToCelsius(32)); // Output: 0
console.log(convertToFahrenheit(0)); // Output: 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
