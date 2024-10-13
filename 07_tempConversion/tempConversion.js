const convertToCelsius = function (fahrenheit) {
  const celciusConversionFormula = ((fahrenheit - 32) * 5) / 9;
  const roundoff = Math.round(celciusConversionFormula * 10) / 10;

  return roundoff;
};

const convertToFahrenheit = function (celcius) {
  const fahrenheitConversionFormula = (9 / 5) * celcius + 32;
  const roundoff = Math.round(fahrenheitConversionFormula * 10) / 10;
  return roundoff;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
