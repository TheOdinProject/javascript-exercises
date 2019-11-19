const reverseString = function(reverseString) {

var phrase = reverseString.split("");
var backward = phrase.reverse();
var taskComplete = backward.join("");

return taskComplete;
}

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');

module.exports = reverseString
