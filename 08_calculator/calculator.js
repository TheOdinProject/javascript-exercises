const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  // const sumArr = [...numArr];
  // let sum = 0;
  // sumArr.forEach((v) => {
  //   sum += parseInt(v);
  // });
  // return sum;
  return numArr.reduce((total, current) => total + current, 0);
};

const multiply = function (numArr) {
  // const multiplyArr = [...numArr];
  // let total = 1;
  // multiplyArr.forEach((v) => {
  //   total = total * parseInt(v);
  // });
  // return total;
  return numArr.reduce((total, current) => total * current);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num1) {
  //base case
  if (num1 === 0) {
    return 1;
  }
  //create recursive call to the method, and multiply the number with the value returned
  return num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
