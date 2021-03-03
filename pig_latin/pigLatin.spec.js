const expect = require("expect");//  Topics

//  * modules
//  * strings

//  Pig Latin

// Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

// Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.

// (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)

// See https://en.wikipedia.org/wiki/Pig_Latin for more details.

const pigLatin = require("./pigLatin.js");

describe('#translate', function() {
	it('translates a word beginning with a vowel', function() {
		s = pigLatin.translate("apple");
		expect(s).toEqual('appleay');
	});

	xit('translates a word beginning with a consonant', function() {
		s = pigLatin.translate("banana");
		expect(s).toEqual("ananabay");
	});

	xit('translates a word beginning with two consonants', function() {
		s = pigLatin.translate("cherry");
		expect(s).toEqual('errychay');
	});

	xit('translates two words', function() {
		s = pigLatin.translate("eat pie");
		expect(s).toEqual('eatay iepay');
	});

	xit('translates a word beginning with three consonants', function() {
		expect(pigLatin.translate("three")).toEqual("eethray");
	});

	xit('counts "sch" as a single phoneme', function() {
		s = pigLatin.translate("school");
		expect(s).toEqual("oolschay");
	});

	xit('counts "qu" as a single phoneme', function() {
		s = pigLatin.translate("quiet");
		expect(s).toEqual("ietquay");
	});

	xit('counts "qu" as a consonant even when its preceded by a consonant', function() {
		s = pigLatin.translate("square");
		expect(s).toEqual("aresquay");
	});

	xit('translates many words', function() {
		s = pigLatin.translate("the quick brown fox");
		expect(s).toEqual("ethay ickquay ownbray oxfay");
	});
});
