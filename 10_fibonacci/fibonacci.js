const fibonacci = function(input) {
    const n = parseInt(input);
    if(isNaN(n)){
      return NaN; // Return NaN if input is not a number
    }
    if(input < 0){
        return "OOPS";
    }
    if(n <= 1){
     return n;
    }else{
     return fibonacci(n - 1) + fibonacci(n - 2);
    }
   
};

// Do not edit below this line
module.exports = fibonacci;
