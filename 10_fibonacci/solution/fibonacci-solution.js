const fibonacci = function(countArg) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

// An even more advanced way
// const fibs = (n) =>
//  Array.from({ length: n }) // create array of size n, filled with "undefined"
//    // It is a convention to use "_" as a name for arguments that are not used
//    // But need to be there in order to access further arguments. _ here would represent the value
//    // But we don't need the value, we want index, which is the third argument received by the callback function
//    .reduce((acc, _, i) => 
//          // The return value of the callback function becomes the *next* value for the accumulator
//          [...acc, acc.at(-1) + acc.at(-2)], [0, 1])[n]; // since this generates an array of n fibonacci numbers, we just take last value

module.exports = fibonacci;
