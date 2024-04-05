const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR'
    } else {
        let sumTotal = 0;
        let bigger = 0;
        let shorter = 0;
    
        if (num1 > num2){
            bigger = num1
            shorter = num2
        }else{
            bigger = num2
            shorter = num1
        }
        
        for (shorter; shorter <= bigger; shorter++) {
            sumTotal += shorter
        }
        return sumTotal
    }
};

// Do not edit below this line
module.exports = sumAll;
