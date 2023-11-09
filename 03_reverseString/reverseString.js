const reverseString = function(input) {
    // approach 1.
    return input.split('').reverse().join('');
};

const reverseStringFaster = function(input) {
    // approach 2.
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
