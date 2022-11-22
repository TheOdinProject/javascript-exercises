const reverseString = function(string) {
    const splittedString = string.split("");
    const reversedString = splittedString.reverse();
    const joinedString = reversedString.join("");

    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
