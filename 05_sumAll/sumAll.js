const sumAll = function(arg1, arg2) {
    let sum = 0;
    if (typeof(arg1) != 'number' || typeof(arg2) != 'number' || arg1 < 0 || arg2 < 0) {
        return "ERROR";
    }
    let small, big;
    if (arg1 < arg2) {
        small = arg1;
        big = arg2;
    } else {
        small = arg2;
        big = arg1;
    }
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
