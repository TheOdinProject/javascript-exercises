const getTheTitles = function(books) {
    let titles = []
    books.forEach(book => {
        titles.push(book.title);
    });
    return titles
}

module.exports = getTheTitles;
