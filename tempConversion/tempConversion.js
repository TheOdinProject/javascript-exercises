const ftoc = function(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  let rounded1 = Math.round(celcius * 10) / 10;
  return rounded1;
}

const ctof = function(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32;
  let rounded2 = Math.round(fahrenheit * 10) / 10;
  return rounded2;
}

module.exports = {
  ftoc,
  ctof
}

