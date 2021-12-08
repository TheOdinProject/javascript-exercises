const fibonacci = function(Fn) {
    let fib = [0, 1];
    if (Fn >= 0) {
        for (i=2;i<=Fn;i++) {
            fib[i] = fib[i-2] + fib[i-1];
        }
    } else {
        return 'OOPS'
    }
    return fib[Fn];
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(5));