const convertToCelsius = function(fahrenheit) {

  let celsius = (fahrenheit - 32 ) * 5 / 9;
  celsius = parseFloat(celsius.toFixed(1));
  return celsius;

};

const convertToFahrenheit = function(celsius) {

  let fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheit = parseFloat(fahrenheit.toFixed(1));
  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
