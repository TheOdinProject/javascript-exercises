const fibonacci = function (n) {
  let output = [0, 1];

  n = Number(n);
  if (n < 0) return 'OOPS';
  for (let i = 1; i < n; i++) {
    output.push(output[i] + output[i - 1]);
  }
  return output[n];
};

// Do not edit below this line
module.exports = fibonacci;
