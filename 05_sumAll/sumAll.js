const sumAll = function(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        smallNumber = Math.min(num1, num2);
        bigNumber = Math.max(num1, num2);
        sum = smallNumber;
        for (let i = smallNumber; i <= bigNumber; i++) {
            if (i > smallNumber) {
                sum = sum + i;
            }
        }
        if (sum >=0) {
            return sum;
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

