const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    let total = 0;
    const start = Math.min(min, max);
    const end = Math.max(min, max);
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};

module.exports = sumAll;
