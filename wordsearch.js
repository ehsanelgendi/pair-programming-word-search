//Pair programming @ehsanelgendi and @campbell46
const wordSearch = (letters, word) => {
  if (letters.length <= 0 || word.length <= 0) return false;
  const reverseWord = word.split('').reverse().join('');
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }
  const verticalTranspose = transpose(letters);
  const verticalJoin = verticalTranspose.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  return false;
};

const transpose = function (matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      output[column][row] = matrix[row][column];
    }
  }
  return output;
};

module.exports = wordSearch;