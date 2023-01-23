const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
    // A slightly shorter version of the above solution:
    // [a, b] = [b, a + b];
  }
  return b;
};

module.exports = fibonacci;
