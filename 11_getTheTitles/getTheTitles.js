const getTheTitles = function () {
  const books = [
    {
      title: "Book",
      author: "Name",
    },
    {
      title: "Book2",
      author: "Name2",
    },
  ];

  let titles = [];

  books.forEach((book) => {
    titles.push(book.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
