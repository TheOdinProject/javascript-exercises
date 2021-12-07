const sumAll = function(firstArg, secondArg) {
    let startCounter = firstArg;
    let stopCounter = secondArg;
    let sum = 0;
    
    if (!(typeof firstArg === 'number') || !(typeof secondArg === 'number')){ //non-number case
        return "ERROR"
    }

    if (startCounter < 0 || stopCounter < 0 ) // negative case
        return "ERROR"
   
    if (startCounter > stopCounter){ // large number case
        for (let step = startCounter; step >= stopCounter; step--) {
            sum += step;
        }
        return sum;
    }
    else {
        for (let step = 1; step <= stopCounter; step++) {
            sum += step;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
