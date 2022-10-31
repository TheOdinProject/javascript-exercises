const ftoc = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9))
}
const ctof = function(celsius) {
  return Math.round(((celsius * 9/5) + 32))
}

ftoc(32)

ctof(0)
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
