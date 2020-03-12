const sumAll = function (first, last) {
    if (first < 0) { return 'ERROR' }
    if (typeof first !== 'number' || typeof last !== 'number') { return 'ERROR' }
    first = Number(first);
    last = Number(last);
    let arr = [first,last].sort();
    let sum = 0;
    for (arr[0]; arr[0] <= arr[1]; arr[0]++) {
        sum = Number(sum) + arr[0]
    }
    return sum;
}

module.exports = sumAll
