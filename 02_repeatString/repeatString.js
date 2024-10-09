const repeatString = function(string,counter) {
    if(counter < 0)return "ERROR";
    let text = "";
    for (let i=0; i < counter; i++){
        text = text + string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
