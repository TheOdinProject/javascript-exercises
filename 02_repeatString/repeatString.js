const repeatString = function(str, repeatTimes) { 
    if (repeatTimes < 0)
        return 'ERROR';
        
    let result = '';
    for (let i = 0; i < repeatTimes; i++)
    {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
