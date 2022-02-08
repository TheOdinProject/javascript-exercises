const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count == 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

/* naive recursive */
const fibonacciRecursive = function(count) {
  if (count < 0) return 'OOPS';
  if (count == 0) return 0;
  if (count == 1) return 1;
  return fibonacciRecursive(count - 1) + fibonacciRecursive(count - 2);
}

/* Dynamic Programming (DP) recursive */
const fibonacciDp= function(count) {
  return fibonacciDpHelper(count, {'0': 0, '1': 1});
}

const fibonacciDpHelper = function(count, memo) {
  if (count < 0) return 'OOPS';
  if (memo.hasOwnProperty(`${count}`)) return memo[`${count}`];
  const result = fibonacciDpHelper(count - 1, memo) + fibonacciDpHelper(count - 2, memo);
  memo[`${count}`] = result;
  return result;
}

module.exports = fibonacci;