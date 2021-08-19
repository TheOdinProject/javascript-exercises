const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

// Alternative recursive version
const recursiveFib = function(count) {
  if (count < 0) return "OOPS";
  if (count == 1 || count == 2) return 1;
  return recursiveFib(index - 1) + recursiveFib(index - 2);
};

module.exports = fibonacci;
