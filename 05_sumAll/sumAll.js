const sumAll = function(x, y) {
    if (x < 0 || y < 0) {
        return "ERROR"
    } else if (typeof x != "number" || typeof y != "number") {
        return "ERROR"
    }
    
    let diff = x - y
    if (diff < 0) {
        diff *= -1
    }
    
    let sum = 0
    let min = x

    if (x > y) {
        min = y
    }

    for (let i = 0; i <= diff; i++) {
        sum += min
        min++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
