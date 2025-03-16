const convertToCelsius = function (degreeF) {
  const num = ((degreeF - 32) * 5) / 9;
  return Number(num.toFixed(1));
};

const convertToFahrenheit = function (degreeC) {
  const num = (degreeC * 9) / 5 + 32;
  return Number(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
