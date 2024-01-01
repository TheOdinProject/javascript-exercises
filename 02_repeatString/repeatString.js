const repeatString = function(someString, num) {
    let returnString = ""
    if (num > 0){
        for (let i = 0; i < num; i++){
            returnString += someString;
        }
        return returnString;
    } else if (num == 0){
        return returnString
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
