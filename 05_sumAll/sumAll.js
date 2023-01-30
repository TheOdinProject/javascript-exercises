const sumAll = function(start, end) {
    sum = 0;

    if (start > end) {
        for (let j = end; j <= start; j++) {
            sum += j;
        }
    } else {
        for (let j = start; j <= end; j++) {
            sum += j;
        }
    }
    return sum;
};

console.log(sumAll(-10, [1,4]));

// Do not edit below this line
// module.exports = sumAll;
