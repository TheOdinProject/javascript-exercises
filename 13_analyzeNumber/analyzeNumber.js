function analyzeNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

module.exports = analyzeNumber;
