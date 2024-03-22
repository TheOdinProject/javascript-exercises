const factorial = function(n) {
  if (/[.-]/.match(n + '')) return;
  if (n === 0 || n === 1) return 1;
  return factorial(n - 1) + factorial(n - 2);
};

// Do not edit below this line
module.exports = factorial;