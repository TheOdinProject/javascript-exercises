const recursiveFibonacci = function (n) {
  switch (n) {
    case 1:
      return [1];
    case 2:
      return [1, 1];
  }

  const previousSolution = recursiveFibonacci(n - 1);

  return [
    ...previousSolution,
    previousSolution.at(-1) + previousSolution.at(-2),
  ];
};

// Do not edit below this line
module.exports = recursiveFibonacci;
