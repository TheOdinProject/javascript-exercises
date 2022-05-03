const repeatString = function(String, number) {
    const hey = 'hey';
    let string ='';
    let errorMsg = 'ERROR';
    let i = 1;
    while(i <= number){
        string += hey;
        i++
    }
    if (number < 0){
        return errorMsg
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
