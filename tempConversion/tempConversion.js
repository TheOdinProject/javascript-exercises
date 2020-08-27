const ftoc = function(f) {
  let c = (f-32)*(5/9);
  let celcius = +c.toFixed(1);
  return celcius;
}

const ctof = function(c) {
  let f = c * (9/5) + 32;
  let fahrenheit = +f.toFixed(1);
  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
