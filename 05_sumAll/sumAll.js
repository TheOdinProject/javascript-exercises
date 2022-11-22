const sumAll = function (num1, num2) {
    const numbers = [num1, num2];
    let result = 0;

    if (!Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR";

    if (num1 < 0 || num2 < 0)
        return "ERROR";

    if (num1 > num2) {
        numbers.sort((num1, num2) => num1 - num2);
    }

    for (let i = numbers[0]; i <= numbers[1]; i++)
        result += i;

    return result; // return result
};

// Do not edit below this line
module.exports = sumAll;
