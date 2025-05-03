const sumAll = function (arr) {
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumAll([1, 4])); // Output: 10