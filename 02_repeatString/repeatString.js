const repeatString = function(string, num) {
    let str = "";

    if (num < 0) return "ERROR";
    
    for (let i = 0; i < num; i++) {
        str += string;
    }

    return str;
};

// Do not edit below this line
module.exports = repeatString;
