const pigLatin = require('./pigLatin')

//  Topics

//  * modules
//  * strings

//  Pig Latin

// Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

// Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.

// (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)

// See https://en.wikipedia.org/wiki/Pig_Latin for more details.

describe('translate', () => {
	test('translates a word beginning with a vowel', () => {
		expect(pigLatin("apple")).toBe('appleay');
	});

	test.skip('translates a word beginning with a consonant', () => {
		expect(pigLatin("banana")).toBe("ananabay");
	});

	test.skip('translates a word beginning with two consonants', () => {
		expect(pigLatin("cherry")).toBe('errychay');
	});

	test.skip('translates two words', () => {
		expect(pigLatin("eat pie")).toBe('eatay iepay');
	});

	test.skip('translates a word beginning with three consonants', () => {
		expect(pigLatin("three")).toBe("eethray");
	});

	test.skip('counts "sch" as a single phoneme', () => {
		expect(pigLatin("school")).toBe("oolschay");
	});

	test.skip('counts "qu" as a single phoneme', () => {
		expect(pigLatin("quiet")).toBe("ietquay");
	});

	test.skip('counts "qu" as a consonant even when its preceded by a consonant', () => {
		expect(pigLatin("square")).toBe("aresquay");
	});

	test.skip('translates many words', () => {
		expect(pigLatin("the quick brown fox")).toBe("ethay ickquay ownbray oxfay");
	});
});
