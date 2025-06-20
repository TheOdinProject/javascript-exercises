const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ];

const getTheTitles = function(books) {

    let title = [];

    for(let book of books){
        title.push(book.title);
    }

    return title;

};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
