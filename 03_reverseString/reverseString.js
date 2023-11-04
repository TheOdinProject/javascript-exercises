const reverseString = function(str) {
    let stringIntoArray = str.split("");
    let arrayReverse = stringIntoArray.reverse();
    let arrayIntoString = arrayReverse.join("");
    return arrayIntoString;
};

reverseString('hello');
module.exports = reverseString;
