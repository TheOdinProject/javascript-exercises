const reverseString = function(words) {
    let reversed = "";
    for (let i=words.length; i >= 0; i--){
        reversed += words.charAt(i);
    }
    return reversed;
};

console.log(reverseString("Hello!"))

// Do not edit below this line
module.exports = reverseString;
