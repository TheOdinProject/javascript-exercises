const sumAll = function(value1, value2) {

    let result = 0;
    let start;
    let finish;

    if (typeof value1 != "number" ||
        typeof value2 != "number" ||
        value1 < 0 ||
        value2 < 0) {
        return ("ERROR");
    }

    if (value1 <= value2) {
        start = value1;
        finish = value2;
    } else {
        start = value2;
        finish = value1;
    }
    
    for (let i = start ; i <= finish ; i++) {
        result += i;
    }
    return (result);
};

// Do not edit below this line
module.exports = sumAll;
