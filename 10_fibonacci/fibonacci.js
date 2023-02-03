const fibonacci = function(n) {
    if (n <= 1) {
        return Number(n);
    }
      if (n < 0) {
        return "opps"
      }
    
return fibonacci(n - 1) + fibonacci(n - 2)

};

// Do not edit below this line
module.exports = fibonacci;
