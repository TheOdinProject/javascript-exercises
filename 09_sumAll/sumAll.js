
const sumAll = function(firstNumber, secondNumber) {

    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";

    if(firstNumber < 0 || secondNumber < 0) return "ERROR";

    if (firstNumber > secondNumber){
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

        let result = 0;

        for(let i = firstNumber; i <= secondNumber; i++){
            result += i;
        }
    return result;
};

sumAll(2, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(2.5, 4)
sumAll(10, "90")
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
