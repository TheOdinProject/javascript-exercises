const convertToCelsius = function(farenhit) {
  return (5/9)*(farenhit-32)
};

const convertToFahrenheit = function(celsius) {
  return (9*celsius/5)+32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
