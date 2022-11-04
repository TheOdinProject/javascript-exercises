const sumAll = function(num1, num2) {
    let sum = 0;
    let num1Type = typeof num1;
    let num2Type = typeof num2;

    //Ensures number is not negative
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    //Ensures sum is a number
    } else if (num1Type !== "number" || num2Type !== "number") {
        return "ERROR";
    //If the second number is smaller than the first number
    } else if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            sum += parseInt(i);
        }
        return sum;
    //If the first number is larger than the second number
    } else {
        for (let i = num1; i <= num2; i++) {
            sum += parseInt(i);
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
