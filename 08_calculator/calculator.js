const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  sum: function (array) {
    return array.reduce((total, current) => total + current, 0);
  },
  multiply: function (...args) {
    return args.reduce((product, current) => product * current, 1);
  },
  power: function (a, b) {
    return Math.pow(a, b);
  },
  factorial: function (n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  },
};

module.exports = calculator;
