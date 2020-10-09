module.exports = function towelSort(matrix) {
	if(!matrix || matrix.length == 0) return [];
	let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
			matrix[i].reverse();
		}
		for (let j = 0; j < matrix[i].length; j++) {
			result.push(matrix[i][j])
		}
  }
  return result;
}
