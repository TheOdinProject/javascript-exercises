const sumAll = function(num, num2) {

    let result = 0;

    if (num < 0 || num2 < 0){
        return "ERROR";
    }

    if(num < num2){
        for(let n = num; n <= num2; n++){
            result += n;
        }
        return result;
    }

    else if (num > num2){
        for(let n = num; n >= num2; n--){
            result += n;
        }
        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
