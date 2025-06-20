const reverseString = function(str) {
    const result = str.split("").reverse().join("");

    return result;

}

reverseString("hello");

reverseString("hello there");

reverseString(`123! abc! Hello, Odinite.`);

reverseString(" ");

// Do not edit below this line
module.exports = reverseString;
