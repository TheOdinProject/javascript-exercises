const convertToCelsius = function(far) {
  cel = (far -32) *(5/9);
  return Number(cel.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  far = (cel *(9/5)) + 32;
  return Number(far.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
