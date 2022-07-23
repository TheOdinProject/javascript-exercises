const ftoc = function (temp) {
  let converted = (temp - 32) * (5 / 9);
  return Math.round((converted + Number.EPSILON) * 10) / 10
};

const ctof = function (temp) {
  let converted = temp * (9 / 5) + 32;
  return Math.round((converted + Number.EPSILON) * 10) / 10

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
