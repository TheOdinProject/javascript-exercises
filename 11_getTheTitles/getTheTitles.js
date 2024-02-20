const getTheTitles = function (bookArr) {
  let bookArray = [...bookArr];
  console.log(bookArray);
  let arr = bookArray.map((v) => v.title);
  console.log(arr);
  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
