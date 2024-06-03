const convertToCelsius = function (Fahrenheit) {
  let result = ((Fahrenheit - 32) * 5) / 9;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  let result = (celsius * 9) / 5 + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
