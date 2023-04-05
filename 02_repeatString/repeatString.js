const repeatString = function(string,num) {
    if(num ===0){
        return "";
    }
    else if(num<0){
        return "ERROR";
    }
    else if(num ===1){
        return string;
    }
    else {
        let result = string;
        while(num>1){
            result = result+ string;
            num--;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
