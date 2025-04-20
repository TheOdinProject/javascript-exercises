const fibonacci = function(f) {
    let n = Number(f)
    if (n < 0) {
        return "OOPS"
    } else if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
