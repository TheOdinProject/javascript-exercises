const flatten = function (array, depth = Infinity) {
  if (depth === 0 || !array.some(Array.isArray)) return array

  let flattened = []
  array.forEach(el => {
   flattened = flattened.concat(el) 
  });

  return flatten(flattened, depth - 1)
} 

// Do not edit below this line
module.exports = flatten;
