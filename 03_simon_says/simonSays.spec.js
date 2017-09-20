var simon = require ('./simonSays.js');

describe('Simon says', function() {
	describe('echo', function() {
		it('should echo hello', function() {
			expect(simon.echo("hello")).toEqual("hello");
		});

		it('should echo bye', function() {
			expect(simon.echo("bye")).toEqual("bye")
		});
	});

	describe('shout', function() {
		it('should shout hello', function() {
			expect(simon.shout("hello")).toEqual("HELLO");
		});

		it('should shout multiple words', function() {
			expect(simon.shout("hello world")).toEqual("HELLO WORLD");
		});
	});

	describe('repeat', function() {
		it('should repeat', function() {
			expect(simon.repeat("hello")).toEqual("hello hello");
		});

		it('should repeat a number of times', function() {
			expect(simon.repeat("hello",3)).toEqual("hello hello hello");
		});
	});

	describe('pieceOfWord', function() {
		it('returns the first letter', function() {
			expect(simon.pieceOfWord("hello", 1)).toEqual("h");
		});

		it('returns the first two letters', function() {
			expect(simon.pieceOfWord("Bob", 2)).toEqual("Bo");
		});

		it('returns the first several letters', function() {
			var s = "abcdefg";
			expect(simon.pieceOfWord(s, 1)).toEqual("a");
			expect(simon.pieceOfWord(s, 2)).toEqual("ab");
			expect(simon.pieceOfWord(s, 3)).toEqual("abc");
		});
	});

	describe('firstWord', function() {
		it('tells us the first word of "Hello World" is "Hello"', function() {
			expect(simon.firstWord("Hello World")).toEqual("Hello");
		});

		it('tells us the first word of "oh dear" is "oh"', function() {
			expect(simon.firstWord("oh dear")).toEqual("oh");
		});
	});

	describe('titleCreator', function() {
		it('capitalizes a word', function() {
			expect(simon.titleCreator("jaws")).toEqual("Jaws");
		});

		it('capitalizes every word (aka title case)', function() {
			expect(simon.titleCreator("david copperfield")).toEqual("David Copperfield");
		});

		it("doesn't capitalize 'little words' in a title", function() {
			expect(simon.titleCreator("war and peace")).toEqual("War and Peace");
		});

		it('does capitalize "little words" at the start of a title', function() {
			expect(simon.titleCreator("the bridge over the river kwai")).toEqual("The Bridge over the River Kwai");
		});
	});
});