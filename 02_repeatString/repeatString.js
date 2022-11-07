const repeatString = function(string, num) {
    let addString = "";
    for (let i = 0; i < num; i++) {
        addString += string;
    }

    if (num < 0) {
        return "ERROR";
    } else{
        return addString;  
    }
    
};

// Do not edit below this line
module.exports = repeatString;
