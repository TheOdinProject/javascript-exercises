const fibonacci = function(position) {
    let fib = [0,1]
    let count = Number(position)
    if (count < 0) return 'OOPS'
    else if (count === 0) return 0
    else if (count === 1) return 1
    else {
        let num = 0
        for (let i = 2; i <= count; i++){
            num = fib[0] + fib[1]
            fib[0] = fib[1]
            fib[1] = num
        }
        return num
    }
};
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
