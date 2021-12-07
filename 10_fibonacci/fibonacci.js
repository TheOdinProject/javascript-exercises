const fibonacci = function(n) {
    // if (number === 0) {
    //     return 0;
    // }
    // if (number === 1) {
    //     return 1;
    // }
    // let next = 1;
    // let prev = 0;
    // for (let i = 0; i < number; i++){
    //     let temp = next;
    //     next = prev + next;
    //     prev = temp;
    // }
    // return prev;
    if (n < 0)
        return "OOPS"
    if (n <= 1)
        return parseInt(n);
    return fibonacci(n-1) + fibonacci(n-2);

// fibonacci(3)
/*
    fib(1) + fib (1) = 1 + 1
*/
};
//fibonacci number value where f0 = 0 , f1 = 1 and 
// fn = f(n-1) + f(n-2)


// Do not edit below this line
module.exports = fibonacci;
