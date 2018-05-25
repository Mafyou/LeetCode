/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let result = "";
	if (strs.length === 0) { return ""; }
	if (strs.length === 1) { return strs[0]; }
	
	let min_length = strs[0].length;
	let number_of_words = strs.length;
	for (let i = 0; i < number_of_words; i++) {
		let len = strs[i].length;
		if (len < min_length) { min_length = len; }
	}
	
	for (let g = 0; g < min_length; g++) {
		let charToCompare = strs[0][g];
		let occurence = 0;
		for (let i = 0; i < strs.length; i++) { // Loop words
			let temp = strs[i][g];
			if (temp === charToCompare) {
				occurence++;
			} else {
				break;
			}
		}
		if (occurence >= strs.length) {
			result += charToCompare;
		}
	}
	return result;
};

console.log("res: " + longestCommonPrefix(["flower","flow","flight"]));
console.log("res: " + longestCommonPrefix(["dog","racecar","car"]));
console.log("res: " + longestCommonPrefix(["aa","aa"]));
console.log("res: " + longestCommonPrefix(["aa","ab"]));
console.log("res: " + longestCommonPrefix(["aca","cba"]));