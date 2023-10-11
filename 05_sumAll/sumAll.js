const sumAll = function(num1, num2) {
    let sum = 0;
    const arr = [];

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if(num1 < 0 || num2 < 0) return 'ERROR';

    for(let i = 1; i <= Math.max(num1, num2); i++) {
        arr.push(i);
    }

    arr.forEach(num => {
        sum += num;
    })

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
