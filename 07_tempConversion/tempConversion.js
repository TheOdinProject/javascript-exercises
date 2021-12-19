const ftoc = function(temp) {
  if (typeof(temp) !== 'number')
    return 'ERROR';
  
  return Math.round( (temp-32) * 50 / 9  + Number.EPSILON) / 10;
};

const ctof = function(temp) {
  if (typeof(temp) !== 'number')
    return 'ERROR';

  return Math.round((temp*9/5 + 32)*10 + Number.EPSILON) / 10;  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
