const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((total, num) => total + num, 0);

const multiply = (array) => array.reduce((total, num) => total * num, 1);

const power = (a, b) => a ** b;

const factorial = function (n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
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
