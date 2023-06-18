// Dont use summation formula

const sumAll = function(start, end) {
    let total = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);

    if (start < 0 || typeof start !== "number"){
        return "ERROR";
    }
    if (end < 0 ||  typeof end !== "number"){
        return "ERROR";
    }

    for(let i=0; i < max-min+1; i++){
        total += min+i;
    }
    return total;
};

console.log(sumAll(10,"90"));
// Do not edit below this line
module.exports = sumAll;
