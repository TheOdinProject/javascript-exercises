const fibonacci = function (num) {
    if (num < 0) { return "OOPS"}
    let sum = [];
    sum[0] = 0;
    sum[1] = 1;
    for (let i = 2; i <= num; i++) {
        sum[i] = sum[i - 1] + sum[i - 2];
    }
    return sum[num];
}

module.exports = fibonacci
