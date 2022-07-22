const repeatString = function(string, numberOfRepeats) {
    let result = '';

    if (numberOfRepeats < 0) {
        return 'ERROR';
    }
    
    for (let i = 0; i < numberOfRepeats; i++)
    {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
