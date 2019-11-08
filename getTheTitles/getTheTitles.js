const getTheTitles = function(books) {
	let bookTitles = [];

	books.forEach((book) => {
		bookTitles.push(book.title);
	})
	
	return bookTitles;
}

module.exports = getTheTitles;
