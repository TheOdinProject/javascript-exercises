const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32)*(5/9);
  return Math.round(celsius* 10)/10;
}

const ctof = function(celsius) {
  fahrenheit = celsius * (9/5) + 32;
  return Math.round(fahrenheit* 10)/10;
}

module.exports = {
  ftoc,
  ctof
}
