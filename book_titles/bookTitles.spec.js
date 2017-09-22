var bookTitles = require ('./bookTitles.js');

describe('bookTitle', function() {
	
	var book; // note the scope here, if you declare this inside beforeEach then the scope won't allow it to access the other specs
	
	beforeEach(function() {
			book = new bookTitles.bookTitle(); // creates a new book instance before each test is run
	});

	describe('title', function() {
		
		it('should capitalize the first letter', function() {
			book.title = 'inferno';
			expect(book.title).toEqual('Inferno'); 
		});

		it('should capitalize every word', function() {
			book.title = 'stuart little';
			expect(book.title).toEqual('Stuart Little');
		});

		describe('should capitalize every word except...', function() {
			describe('articles', function() {
				it('does not capitalize "the"', function() {
					book.title = 'alexander the great';
					expect(book.title).toEqual('Alexander the Great');
				});

				it('does not capitalize "a"', function() {
					book.title = 'to kill a mockingbird';
					expect(book.title).toEqual('To Kill a Mockingbird');
				});

				it('does not capitalize "an"', function() {
					book.title = 'to eat an apple a day';
					expect(book.title).toEqual('To Eat an Apple a Day');
				});
			});

			it('conjunctions', function() {
				book.title = 'war and peace';
				expect(book.title).toEqual('War and Peace');
			});

			it('prepositions', function() {
				book.title = 'love in the time of cholera';
				expect(book.title).toEqual('Love in the Time of Cholera');
			});
		});

		describe('should always capitalize...', function() {
			it('I', function() {
				book.title = 'what i wish i knew when i was 20';
				expect(book.title).toEqual('What I Wish I Knew When I Was 20');
			});

			it('the first word', function() {
				book.title = 'the man in the iron mask';
				expect(book.title).toEqual('The Man in the Iron Mask');
			});
		});
	});
});