const convertToCelsius = function (farenheitValue) {
  let celciusValue = ((farenheitValue - 32) / 1.8).toFixed(1);
  return parseFloat(celciusValue);
};

const convertToFahrenheit = function (celciusValue) {
  // 0 celcius = 32 fahrenheit
  // every increase in 1celcius is 1.8
  //(°C * 1.8) + 32 = °F
  let fahrenheitValue = (celciusValue * 1.8 + 32).toFixed(1);
  return parseFloat(fahrenheitValue);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
