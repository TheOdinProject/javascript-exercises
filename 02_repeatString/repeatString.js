const repeatString = function(string, repeats) {
    output_str = '';
    for (i = 0; i < repeats; i++) {
        output_str = output_str + string;
    }
    return output_str;
};

// Do not edit below this line
module.exports = repeatString;
