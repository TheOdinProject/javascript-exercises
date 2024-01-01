const reverseString = function(someString) {
    let reverseString = ''
    for (let i = 1; i <= someString.length ; i++){
        reverseString += someString.at(someString.length - i)
    }
    return reverseString
};
console.log(reverseString('hello'))
// Do not edit below this line
module.exports = reverseString;
