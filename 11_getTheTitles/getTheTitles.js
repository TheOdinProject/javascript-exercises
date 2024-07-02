const getTheTitles = function(array) {
  let titles = [];
  array.forEach((element) => {
    titles.push(element.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
