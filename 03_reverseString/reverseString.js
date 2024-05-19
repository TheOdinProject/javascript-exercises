const reverseString = function(str) {

    let chars = str.split("");
    let reversed = "";
    while (chars.length > 0) {
        reversed += chars.pop();
    }
    return (reversed);
};

// Do not edit below this line
module.exports = reverseString;
