const reverseString = function(word) {
    let dorw = "";
    for(i = word.length-1; i>=0; i--) dorw += word[i]
    return dorw;
};

// Do not edit below this line
module.exports = reverseString;
