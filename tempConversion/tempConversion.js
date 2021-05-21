const ftoc = function (toCelsius) {
  toCelsius = ((toCelsius - 32) * 5) / 9;
  return Math.round(toCelsius * 10) / 10;
};

const ctof = function (toFahr) {
  toFahr = (toFahr * 9) / 5 + 32;
  return Math.round(toFahr * 10) / 10;
};

module.exports = {
  ftoc,
  ctof,
};
