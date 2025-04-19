const sumAll = (a, b) => {
    if (
        typeof a !== "number" || a % 1 !== 0 || a < 0 ||
        typeof b !== "number" || b % 1 !== 0 || b < 0
      ) {
        return "ERROR"
       } else {
    let sum = 0
    for (let i = Math.min(a, b); i<= Math.max(a, b); i +=1) {
        sum += i;
    }
    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
