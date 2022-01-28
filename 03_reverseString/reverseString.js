const reverseString = function(str) {
    var toArray = str.split("");
    var toReverse = toArray.reverse();
    var toJoin = toReverse.join("");
    return toJoin;
};

var stri = ("pedro almeida");
myTest = reverseString(stri);

console.log(myTest);

// Do not edit below this line
module.exports = reverseString;
