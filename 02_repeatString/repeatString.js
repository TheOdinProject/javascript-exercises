const repeatString = function(str, num) {
    myStr = "";
    if (num < 0) {
        myStr = "ERROR";
    } else {
    for (let i = 0; i < num; i++) {
        if (num < 0) {
            myStr = "ERROR";
        }
        myStr = myStr + str;
    }
    }
    return myStr;
};

myTest = repeatString("hey", 5);
console.log(myTest);

//var print_test = repeatString();
//console.log(print_test)

// Do not edit below this line
module.exports = repeatString;
