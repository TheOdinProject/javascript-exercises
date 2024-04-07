const recursiveCalculator = function (string) {
  const evaluateTrivial = (trivialExpression) => {
    // Assuming the input expression has no whitespace nor parentheses
    const digitFollowedByOperator = /(?<=\d)[*\-+/]/;
    const operatorIndex = trivialExpression.search(digitFollowedByOperator);
    const operator = trivialExpression[operatorIndex];
    const operandLeft = Number(trivialExpression.slice(0, operatorIndex));
    const operandRight = Number(trivialExpression.slice(operatorIndex + 1));

    switch (operator) {
      case '*':
        return operandLeft * operandRight;
      case '/':
        return operandLeft / operandRight;
      case '+':
        return operandLeft + operandRight;
      case '-':
        return operandLeft - operandRight;
    }
  };
  const expression = string.replace(/\s/g, '');
  const numbers = expression.replace(/[()]/g, '').split(/[*-+/]/g);

  // A trivial expression is one that has no more than 2 operands
  const isTrivial = numbers.length <= 2;
};

// Do not edit below this line
module.exports = recursiveCalculator;
