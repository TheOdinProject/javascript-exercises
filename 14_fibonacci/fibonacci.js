const fibonacci = function(n) {
    if (n <= 0) return "OOPS";
    let a = 1, b = 1;
    if (n === 1) return a;
    if (n === 2) return b;
    for (let i = 3; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
