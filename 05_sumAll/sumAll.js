const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0 ) return "ERROR";
    if (min > max){
        const i = min;
        min = max;
        max = i;
    }

    let sum = 0;
    for (let i = min; i <= max; i++ ){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
