const convertToCelsius = function(a) {
  let b = ((a - 32) * 5/9)
  let bString = b.toFixed(1)
  let bRounded = +bString
  return bRounded
};

const convertToFahrenheit = function(a) {
  let b = ((a * 9/5) + 32)
  let bString = b.toFixed(1)
  let bRounded = +bString
  return bRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
