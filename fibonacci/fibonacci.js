const fibonacci = function (n) {
  n = parseInt(n);

  let fib = [, 1, 1];
  for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return n <= 0 ? "OOPS" : fib[n];
};

module.exports = fibonacci;
