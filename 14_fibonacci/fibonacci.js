const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";
  let a = 0,
    b = 1;
  for (let i = 0; i <= num; i++) {
    if (i === num) return a; // print current Fibonacci number
    let next = a + b;
    a = b;
    b = next;
  }
};

// Do not edit below this line
module.exports = fibonacci;
