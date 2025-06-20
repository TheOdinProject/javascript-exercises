const repeatString = function(txt,  numTimes) {

    if(numTimes < 0){
        return "ERROR";
    }
    let result = "";
    for(i = 0; i < numTimes; i++){
        result += txt;
    }
    return result;

}

repeatString("hey", 3);

repeatString("hello", 10);

repeatString("hi", 1);

repeatString("bye", 0);

repeatString("don't use the built-in repeat method!", 1);

repeatString("goodbye", -1);

repeatString("hey".repeat(Math.random()));

repeatString(" ", 10);

// Do not edit below this line
module.exports = repeatString;
