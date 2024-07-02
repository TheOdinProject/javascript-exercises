const fibonacci = function(input) {
  if (input == 0) return 0;
  if (input < 0) return 'OOPS';
  if (input == 1 || input == 2) return 1;
 
  return fibonacci(input - 2) + fibonacci(input - 1);
};

// Do not edit below this line
module.exports = fibonacci;
