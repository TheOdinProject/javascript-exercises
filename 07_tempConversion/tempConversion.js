const convertToCelsius = function (fahrenheit) {
  return Math.round(((fahrenheit - 32) / 1.8) * 10) / 10; // both working solutions but it turns out second one performs better :)
  // return Number(((fahrenheit - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  return Math.round((celsius * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
