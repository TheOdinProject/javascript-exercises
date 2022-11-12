const convertToCelsius = function() {
   return Math.round((f - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function() {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
