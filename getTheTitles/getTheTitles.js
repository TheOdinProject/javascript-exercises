const getTheTitles = function(books) {
  
  let titleArray = [];

  for (i = 0; i < books.length; i++) {
    // console.log(books[i].title);
    titleArray.push(books[i].title);
  }
  console.log(titleArray);
  return titleArray;
}

module.exports = getTheTitles;
