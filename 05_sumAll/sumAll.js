const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR';
    }else if (num1 > num2) {
        var mySum = 0;
        for (i = num2; i < num1; i++) {
            mySum = mySum + i;
        } 
        mySum += num1;
    } else {
        var mySum = 0;
        for (i = num1; i < num2; i++) {
            mySum = mySum + i;
        }
        mySum += num2;
    }
    
    return mySum;
};

testPrint = sumAll(1, 4);
console.log(testPrint);
// Do not edit below this line
module.exports = sumAll;
