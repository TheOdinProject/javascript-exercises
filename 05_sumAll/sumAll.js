const sumAll = function(num, arg) {
    if(!Number.isInteger(arg) || !Number.isInteger(num) || num<0){
        return "ERROR";
    }
    if (num > arg) [num, arg] = [arg, num];
    let res = 0;
    for (let i = 0; i< arg; i++){
        res += num + i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
