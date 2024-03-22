const factorial = function(n) {
  if (/[-.]/.test(n + '')) return;
  if (+n === 0 || +n === 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;