const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    [a, b] = [b, a+b]
  }
  return b;
};

module.exports = fibonacci;
