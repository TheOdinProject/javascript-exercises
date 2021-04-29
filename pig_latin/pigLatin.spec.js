const expect = require("expect");

//  Topics

//  * modules
//  * strings

//  Pig Latin

// Pig Latin is a made-up children's language that's intended to be confusing. test obeys a few simple rules (below) but when test's spoken quickly test's really difficult for non-children (and non-native speakers) to understand.

// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

// Rule 2: If a word begins with a consonant sound, move test to the end of the word, and then add an "ay" sound to the end of the word.

// (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)

// See https://en.wikipedia.org/wiki/Pig_Latin for more details.

const pigLatin = require("./pigLatin.js");

describe('translate', () => {
	test('translates a word beginning with a vowel', () => {
		s = pigLatin.translate("apple");
		expect(s).toBe('appleay');
	});

	test.skip('translates a word beginning with a consonant', () => {
		s = pigLatin.translate("banana");
		expect(s).toBe("ananabay");
	});

	test.skip('translates a word beginning with two consonants', () => {
		s = pigLatin.translate("cherry");
		expect(s).toBe('errychay');
	});

	test.skip('translates two words', () => {
		s = pigLatin.translate("eat pie");
		expect(s).toBe('eatay iepay');
	});

	test.skip('translates a word beginning with three consonants', () => {
		expect(pigLatin.translate("three")).toBe("eethray");
	});

	test.skip('counts "sch" as a single phoneme', () => {
		s = pigLatin.translate("school");
		expect(s).toBe("oolschay");
	});

	test.skip('counts "qu" as a single phoneme', () => {
		s = pigLatin.translate("quiet");
		expect(s).toBe("ietquay");
	});

	test.skip('counts "qu" as a consonant even when its preceded by a consonant', () => {
		s = pigLatin.translate("square");
		expect(s).toBe("aresquay");
	});

	test.skip('translates many words', () => {
		s = pigLatin.translate("the quick brown fox");
		expect(s).toBe("ethay ickquay ownbray oxfay");
	});
});
