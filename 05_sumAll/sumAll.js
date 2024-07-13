const sumAll = function(value_x, value_y) {
    if ( !Number.isInteger(value_x)|| !Number.isInteger(value_y) ){
        return 'ERROR';
    }   
    if (value_x < 0 || value_y < 0 ) {
        return 'ERROR';
    }
    if (value_x === value_y){
        return 'ERROR';
    }

    let sumToReturn = 0;
    let smallNum, bigNum;
    if (value_x > value_y) {
        bigNum = value_x;
        smallNum = value_y;
    }else{
        smallNum = value_x;
        bigNum = value_y;
    }
    do {
        sumToReturn+=smallNum++;
    } while (smallNum<=bigNum);
    return sumToReturn;
};


// Do not edit below this line
module.exports = sumAll;
