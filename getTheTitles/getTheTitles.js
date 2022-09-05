const getTheTitles = function(array) {
  return array.map(book => book.title);
};

module.exports = getTheTitles;


const getTheTitles = function (array) {
  let titles = [];

  for (const element of array) titles.push(element.title);

  return titles;
};

module.exports = getTheTitles
