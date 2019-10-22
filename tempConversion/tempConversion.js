const ftoc = function(fDegrees) {

fTemp = (fDegrees - 32) * (5 / 9);

var fhTemp = fTemp.toFixed(1);

return (Math.round(fhTemp * 10) / 10);
}
ftoc(32);
ftoc(100);
ftoc(-100);


const ctof = function(cDegrees) {

cTemp = (cDegrees * (9/5) + 32);

var clTemp = cTemp.toFixed(1);

return Math.round(clTemp * 10) / 10;
}
ctof(0);
ctof(73.2);
ctof(-10);


module.exports = {
  ftoc,
  ctof
}
