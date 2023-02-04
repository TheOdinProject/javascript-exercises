const fibonacci = function(n) {
    if (n == 0) {
     return Number(n);
    }
    if (n < 0) {
     return "OOPS";
    }
    if (n == 1) {
      return Number(n);
    }
      return fibonacci(n - 1) + fibonacci(n - 2)
    // n = 3
    // function(2) + function(1)
    // function(1) + function(0) + function(0)  + function(-1)
    // function(0) + function(-1) + 0 + 0 +  
    
    // n = 1
    // function(0) + function(-1)
    // 0 + OPPS
    


};

// Do not edit below this line
module.exports = fibonacci;
