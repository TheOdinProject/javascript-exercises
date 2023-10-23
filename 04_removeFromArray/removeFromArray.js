const removeFromArray = function (array, ...members) {
  let result = array;
  members.map((member) => {
    result = result.filter((i) => {
      return member !== i;
    });
  });
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
