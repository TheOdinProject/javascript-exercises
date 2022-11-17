const getTheTitles = function(books) {
    bookOne = books[0].title;
    bookTwo = books[1].title;

    const bookArray = [bookOne, bookTwo]
    return bookArray;
}
// Do not edit below this line
module.exports = getTheTitles;


/*
const getTheTitles = function(array) {
  return array.map(book => book.title);
};
*/