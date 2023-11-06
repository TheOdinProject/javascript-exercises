const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    
    const fib = [0, 1];
    for (let i = 2; i <= count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[count];
};

module.exports = fibonacci;
