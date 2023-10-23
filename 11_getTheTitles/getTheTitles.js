const getTheTitles = function (array) {
  let result = [];
  array.map((obj) => {
    result.push(obj.title);
  });
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
