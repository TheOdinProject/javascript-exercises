const convertToCelsius = function (fahrenTemp) {
  
  /* Override Bodmas to match Conversion Formulas*/
  const resultCelc = (fahrenTemp - 32) * 5 / 9
  return Math.round(resultCelc * 10) / 10
};

const convertToFahrenheit = function (celcTemp) {
  
  const resultFahr = (celcTemp * 9 / 5 + 32)
  return Math.round(resultFahr * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
