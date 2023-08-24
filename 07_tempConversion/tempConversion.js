const convertToCelsius = function(F) {
  let C = ((F - 32) * 5) / 9;
  return Math.round(C * 10)/ 10;
};

const convertToFahrenheit = function(C) {
  let F = (C * 9) / 5 + 32;
  return Math.round(F * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
