// First iteration pseudocode:
// Take two arguments. 
// Loop between them. 
// Store the value 
// If negative or or non-number parameters: return ERROR
// 
// 

// First iteration with a faulty but promosing loop:

const sumAll = function(x, y) {
    let theSum;
    for (let i = x; i <=y; i++) {
    x += i 
    }
  
  console.log(theSum)
  
};


sumAll(1,10)

// Need to add conditions for ERROR-message


// Do not edit below this line
module.exports = sumAll;
