// Need to figure out how to deal with opposite order (largest first)
// and non-integer error with Number.isInteger()

const sumAll = function(x, y) {
    let theSum;
  
        if (x < 0 || y < 0) {return('ERROR')}

        else if (Number.isInteger(x) == false || Number.isInteger(y) == false) {return('ERROR')}
         
        else  

        {

        for (let i = x+1; i <=y; i++) {
        theSum = x += i 
        }
        
        return theSum
        }
  
};



// Do not edit below this line
module.exports = sumAll;
