const ftoc = function(f) {
  celcius = ((f - 32) * 5) / 9;
  return Math.round(celcius * 10) / 10;
};

const ctof = function(c) {
  fahrenheit = ((c * 9) / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
