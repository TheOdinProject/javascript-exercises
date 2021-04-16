const ftoc = function(fahrenhite) {
  const fTemp = fahrenhite;
  const fToCel = Number(((fTemp - 32) * 5/9).toFixed(1));
  return fToCel;
}

const ctof = function(celsius) {
  const cTemp = celsius;
  const cToFahr = Number((cTemp * 9/5 + 32).toFixed(1));
  return cToFahr;
}

module.exports = {
  ftoc,
  ctof
}
