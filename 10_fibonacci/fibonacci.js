const fibonacci = function(fibLength) {

    if (fibLength < 0) {
        return "OOPS";
    }

    if (fibLength === 0) {
        return 0;
    }
    
    let valueA = 0;
    let valueB = 1;
    
    for (i = 1; i < fibLength; i++) {
        let tempValue = valueB;
        valueB += valueA;
        valueA = tempValue;
    }
    return valueB;
};

fibonacci('1')

// Do not edit below this line
module.exports = fibonacci;
