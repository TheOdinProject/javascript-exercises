const sumAll = function(...args) {

    let totalOfNumbers = 0;
    let firstNumber = args[0];
    let lastNumber = args[args.length - 1];

    /* If either is not a number, return ERROR */
    if (typeof firstNumber != "number" || typeof lastNumber != "number") {
        return 'ERROR';
    }

    /* If first number is greater, switch numbers */
    if (firstNumber > lastNumber) {
        let tempNumber = firstNumber;
        firstNumber = lastNumber;
        lastNumber = tempNumber;
    }

    for (let i = firstNumber; i <= lastNumber; i++) {
        totalOfNumbers += i;
    }

    return totalOfNumbers;
}

module.exports = sumAll