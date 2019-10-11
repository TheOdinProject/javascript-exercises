const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

/* Another possible solution

  const fibonacci = function(num) {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  if(num < 0) return "OOPS";
  return Math.floor((goldenRatio**num) / Math.sqrt(5) + 0.5);
}
*/
module.exports = fibonacci


module.exports = fibonacci;
