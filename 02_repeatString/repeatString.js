const repeatString = function(string, num) {
    if( num > 0 ){
    let repeated = string.repeat(num);
    return repeated;
    } else if( num === 0 ){
     return "";
    }else if ( num < 0 ){
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
