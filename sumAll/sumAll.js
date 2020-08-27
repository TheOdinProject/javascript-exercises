const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b))
        return 'ERROR';

    if (a < 0 || b < 0)
        return 'ERROR';

    if (a > b) {
        let temp = b;
        b = a;
        a = temp;
    }
    let ans = 0;
    for (let i = a; i <= b; i++)
        ans += i;

    return ans;
}

module.exports = sumAll
