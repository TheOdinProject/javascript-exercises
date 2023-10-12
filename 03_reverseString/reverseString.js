const reverseString = function(string) {
let splitString = string.split("");
let revString = splitString.reverse();
let joinString = revString.join("");
return joinString;
};

// Do not edit below this line
module.exports = reverseString;
