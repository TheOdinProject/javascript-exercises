const roundToOne = (num) => Math.round(num * 10) / 10;
const convertToCelsius = function (c) {
  let celsius = ((c - 32) * 5) / 9;
  return roundToOne(celsius, 1);
};

const convertToFahrenheit = function (f) {
  let fahrenheit = f * 1.8 + 32;
  return roundToOne(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
