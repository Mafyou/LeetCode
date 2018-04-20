/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var result = ""
	if (strs.length === 0) {
		return "";
	}
	if (strs.length === 1) {
		return strs[0];
	}
	for (var i = 0; i < strs.length; i++) {
		var currentEntry = strs[i];
		var nextThing = strs[i + 1];
		var isThereANextThing = nextThing !== undefined;
		
		for (var j = i; j < strs.length; j++) {
			var loopedEntry = strs[j];
			for (var ii = i; ii < currentEntry.length; ii++) {
				var currentEntryChar = currentEntry[ii];
				for (var jj = ii; jj < loopedEntry.length; jj++) {
					var loopedEntryChar = loopedEntry[jj];
					
					var isCommonPrefix = currentEntryChar === loopedEntryChar;
					if (isCommonPrefix && !isThereANextThing) {
						result += currentEntryChar;
					}
					var isMoreCharThanTheInputs =	result.length >= currentEntry.length || 
													result.length >= loopedEntry.length;
					//if (isMoreCharThanTheInputs) break;
				}
				var isMoreCharThanTheInputs =	result.length >= currentEntry.length || 
												result.length >= loopedEntry.length;
				//if (isMoreCharThanTheInputs) break;
			}
		}
	}
	return result;
};