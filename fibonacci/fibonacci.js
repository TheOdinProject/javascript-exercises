const fibonacci = function(index) {
    const n = Number(index);
    
    if (n === 1 || n === 2) {
        return 1;
    } else if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    } else if (n <= 0) {
        return "OOPS";
    }
}

module.exports = fibonacci;
