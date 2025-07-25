const sumAll = function(num, num2) {

    if ( typeof num !== "number" || typeof num2 !== "number" ) {
        return "ERROR"
    }

    else if ( !Number.isInteger(num)  ||  !Number.isInteger(num2) ){
        return "ERROR"
    }

    else if ( num < 0 || typeof num2 < 0 ) {
        return "ERROR"
    }

    let biggerNumber = num > num2 ? num : num2;
    let lesserNumber = num < num2 ? num : num2;

    let result = 0;

    for (let i = lesserNumber; i <= biggerNumber; i++) {
        result += i;
    }

    return result

};

// Do not edit below this line
module.exports = sumAll;
