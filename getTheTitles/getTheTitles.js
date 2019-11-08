const getTheTitles = function(books) {
	const mappedBooks = books.map(book => book.title);

	return mappedBooks;
}

module.exports = getTheTitles;
