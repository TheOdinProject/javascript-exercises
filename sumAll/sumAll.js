const sumAll = function(min, max) {
    let temporal;
    let message = "ERROR";
    let sum = 0;
    if(min < 0 || max < 0){
        return message;
    }else if(typeof min !== "number" || typeof max !== "number"){
        return message;
    }if(max < min ){
        temporal = max;
        max = min;
        min = temporal;
    }

    for (let index = min; index < max + 1; index++) {
        sum += index;
    }
    return sum;
};

module.exports = sumAll
