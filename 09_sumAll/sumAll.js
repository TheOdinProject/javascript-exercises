const sumAll = function(num1,num2) {
    let min = Math.min(num1,num2);
    let max = Math.max(num1,num2);
    let sum = 0
    for (i = min ; i <= max ; i++){
        sum += i
    }
        return sum
};

// Do not edit below this line
module.exports = sumAll;
