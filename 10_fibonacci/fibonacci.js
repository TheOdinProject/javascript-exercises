const fibonacci = function(num) {
    if (num < 0) { return "OOPS"; }
    num = parseInt(num); 
    if (num == 0 || num == 1) { return num; }
    let num1 = 0;
    let num2 = 1;
    for (let i = 2; i < num; i++) {
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }
    return num1 + num2;
};

//cheat answer 
// function fibonacci(n) {
//     if (n < 0) { return "OOPS"; }
//     if (n == 0) { return 0;}
//     if (n == 1) { return 1;}
//     return fibonacci(n -1) + fibonacci(n -2 ) 
// }

// cached version (should be a lot faster)
// function fibonacci(n, cache) { 
//     if (n < 0) { return "OOPS"; }
//     if (n == 0) { return 0;}
//     cache = cache || [1, 1] 
//         if (cache[n]) 
//             return cache[n] 
//         return cache[n] = fibonacci(n - 1, cache) +  
//         fibonacci(n - 2, cache); 
// }

// Do not edit below this line
module.exports = fibonacci;

