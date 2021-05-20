const fibonacci = function (member) {
  let indexNo = parseInt(member) - 1;
  if (indexNo < 0) {
    return "OOPS";
  }

  let fib = [1, 1];

  function makeFib() {
    let lastGuy = fib[fib.length - 1];
    let secondLast = fib[fib.length - 2];
    let newGuy = lastGuy + secondLast;
    fib.push(newGuy);
  }

  while (fib.length <= indexNo) {
    makeFib();
  }

  return fib[indexNo];
};

module.exports = fibonacci;
