const contains = function(current, search) {
  if (Object.values(current).includes(search)) return true;

  for (const nestedObject of Object.values(current).filter((value) => typeof value === 'object')) {
    return contains(nestedObject, search)
  }
  
  return false
};
  
// Do not edit below this line
module.exports = contains;
