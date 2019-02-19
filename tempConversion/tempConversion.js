const ftoc = function(F) {
var C = (F-32) * 5/9;
return Math.round(C*10)/10;
}

const ctof = function(C) {
var F = C * 9/5 + 32;
return Math.round(F*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
