const sumAll = function(st,end) {
    if (typeof(st)!== 'number' || typeof(end) !== 'number' || st < 0 || end < 0) 
        return 'ERROR';

    let sum = 0;
    for (let i = Math.min(st,end); i <= Math.max(st,end); i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
