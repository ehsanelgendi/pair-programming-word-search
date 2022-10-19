const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'O', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'T', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'T', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'A', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'W', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'OTTAWA');

    assert.isTrue(result);
  });

  it("should return false if the word is not present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'O', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'T', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'T', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'A', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'W', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isFalse(result);
  });

  it("should return true if the word is not present vertically backwards", function() {
    const result = wordSearch([
      ['A', 'D', 'O', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'L', 'T', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'E', 'T', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'F', 'A', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'N', 'W', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'I', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'S', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is not present horizontally backwards", function() {
    const result = wordSearch([
      ['A', 'D', 'O', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'E', 'T', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'F', 'A', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'N', 'W', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'I', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'S', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return false if the matrix is empty", function() {
    const result = wordSearch([ [], [], []], 'SEINFELD');
    assert.isFalse(result);
  });

  it("should return false if the word is empty", function() {
    const result = wordSearch([
      ['A', 'D', 'O', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'E', 'T', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'F', 'A', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'N', 'W', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'I', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'S', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ],  "");
    assert.isFalse(result);
  });

});
