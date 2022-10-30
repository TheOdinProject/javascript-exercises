const sumAll = function(highInteger, lowInteger) {
    if (!Number.isInteger(lowInteger) || !Number.isInteger(highInteger))return "ERROR";
    if (lowInteger < 0 || highInteger < 0) return "ERROR";
    if (lowInteger > highInteger){
        const temp_holder = lowInteger;
        lowInteger = highInteger;
        highInteger = temp_holder
    }

    let finalSum = 0;
    for (let integers = lowInteger; integers <= highInteger; integers++){
        finalSum += integers;
    }
    return finalSum;
    
};
sumAll(1, 4) 
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(10, "90")
sumAll(10, [90, 1])
// Do not edit below this line
module.exports = sumAll;
