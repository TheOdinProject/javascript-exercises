const sumAll = function(from, to) {
    let sum = 0;
    if(from > to){
        [from, to] = [to, from];
    }
    if(from < 0 || to < 0){
        return "ERROR";
    }
    if(!Number.isInteger(from) || !Number.isInteger(to)){
        return "ERROR";
    }    
        for(from; from <= to; from++){
            sum += from;
        }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
