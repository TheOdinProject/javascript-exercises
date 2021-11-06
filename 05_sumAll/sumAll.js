const sumAll = function(num1, num2) {
    let sum = 0;
    if (Math.sign(num1) === 1 && Math.sign(num2) === 1 && typeof(num1) === 'number' && typeof(num2) === 'number') {
        if (num1 < num2) {
            for (i = num1; i <= num2; i++) {          
                sum += i;
            }
     }  else {
            for (i = num2; i <= num1; i++) {
                   sum += i;
                }
            }
    } else {
        return 'ERROR';
      }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
