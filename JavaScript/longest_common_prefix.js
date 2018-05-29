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

var longestCommonPrefix_LC = function (strs) {
	if (strs === null || strs.length === 0) return "";
	for(let i = 0; i < strs[0].length; i++) {
		let c = strs[0].charAt(i);
		for (let j = 1; j < strs.length; j++) {
			if (i == strs[j].length || strs[j].charAt(i) != c) {
				return strs[0].substring(0, i);
			}
		}
	}
	return strs[0];
}

var longestCommonPrefix_LC2 = function (strs) {
	if (strs.length === 0) return ""

	let prefix = strs[0];
	for (let i = 0; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1)
			if (prefix == "") return "";
		}
	}
	return prefix;
}

var longestCommonPrefix_APAS = function (strs) {
	for (let i = strs.length - 2; i >= 0; i--) {
		strs[i] = commonPrefix(strs[i+ 1], strs[i]);
	}
	return strs[0];
}

var commonPrefix = function (a, b) {
	let lenA = a.length;
	let lenB = b.length;
	let i = 0;
	let pref = "";
	while (i < lenA && i < lenB) {
		if (a.charAt(i) === b.charAt(i)) pref += a.charAt(i);
		else break;
		i++;
	}
	return pref;
}

console.log("res: " + longestCommonPrefix_LC(["flower","flow","flight"])); // fl
console.log("res: " + longestCommonPrefix_LC(["dog","racecar","car"])); // nothing
console.log("res: " + longestCommonPrefix_LC(["aa","aa"])); // aa
console.log("res: " + longestCommonPrefix_LC(["aa","ab"])); // a
console.log("res: " + longestCommonPrefix_LC(["aca","cba"])); // nothing