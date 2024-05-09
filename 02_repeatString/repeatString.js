const repeatString = function(string, num) {
    //Make variable to store end result
    let stringHolder = '';
    // Append current string to end of stringHolder for 'num' many times
  for(let i=0; i<num; i++)
        {
            stringHolder += string;
        }
    //Make error handling for negative number values
    if(num < 0) {
        return 'ERROR'
    }
    else {
        return stringHolder;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
