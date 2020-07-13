const ftoc = function(temperature) {
return parseFloat(((temperature - 32)/1.8).toFixed(1));
}

const ctof = function(temperature) {
return parseFloat(((temperature*1.8)+32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
