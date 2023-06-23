const sumAll = function (numOne, numTwo) {
    
    /* Checks */
    if (typeof numOne !== "number" || numOne < 0 || typeof numTwo !== "number" || numTwo < 0) {
        return "ERROR";
    }

    if (numOne > numTwo) {
        var placeHold = numTwo
        numTwo = numOne;
        numOne = placeHold; 
    }

    var sum = 0;
    for (i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
