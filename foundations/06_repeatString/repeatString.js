function repeatString(str, num){
    let newStr = "";

     if( num < 0){
            return "ERROR";
        };

    for(let i = 0; i < num; i++){
        newStr += str;
    };
    
    return newStr;
}


// Do not edit below this line
module.exports = repeatString;
