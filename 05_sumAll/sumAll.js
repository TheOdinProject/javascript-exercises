const sumAll = function(num1, num2) {
    let sum = 0;
            
    for (let i = num1; i <= num2; i++) {
        sum += parseInt(i);
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
