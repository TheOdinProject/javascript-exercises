const reverseString = function(str) {
    if (str.length < 2)
        return str;
        
    const arr = str.split("");
    const reverse_arr = arr.reverse();
    return reverse_arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
