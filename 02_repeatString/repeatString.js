const repeatString = function(inString,repeat) {
    var newString = "";
    // switch (repeat) {
    //     case repeat=0: return "";
    //     case repeat<0: return "ERROR";
    //     default:
        // for (i=1; i <= repeat; i++) {
        //     newString += string;
        // }
        // return newString;
    // }

    if (repeat > 0) {
        for ( i = 1 ; i <= repeat ; i++) {
            newString += inString;
        }
        return newString;
    } else if (repeat < 0) {
        return "ERROR";
    } else {
        return "";
    }
}

// Do not edit below this line
module.exports = repeatString;
