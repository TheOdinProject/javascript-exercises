const repeatString = function(string, num) {
    var repeatedWord = "";
    while (num >  0){
        repeatedWord += string;
        num--;
    }
    return repeatedWord;
};
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1)

// Do not edit below this line
module.exports = repeatString;
