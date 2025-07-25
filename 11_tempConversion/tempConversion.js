const convertToCelsius = function(temperature) {
  let formula = (temperature - 32) / (9 / 5)
  let result =  parseFloat(formula.toFixed(1))
  return result
};

const convertToFahrenheit = function(temperature) {
  let formula = (temperature * 9 / 5) + 32
  let result =  parseFloat(formula.toFixed(1))
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
