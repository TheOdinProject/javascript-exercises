const fibonacci = function(countArg) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    let count
    if (typeof countArg !== 'number' || countArg < 0 || Number.isNaN(countArg)) {
        return "OOPS";
    } else count = countArg;
    
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

console.log(fibonacci('hello'))

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

module.exports = fibonacci;

