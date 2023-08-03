const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// This is another implementation of Fibonacci that uses recursion
const recursiveFibonacci = function(n) {
    if (n <= 0) return "OOPS";
    if (n <= 2) return 1;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
};

module.exports = fibonacci;
