/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var result = 0;
	var NOT_FOUND = -1;
	var ERROR_BRACKET = 3;
	var ERROR_PARENTHESIS = 4;
	var OPEN_PARENTHESIS = '(';
	var CLOSE_PARENTHESIS = ')';
	var OPEN_BRACKET = '[';
	var CLOSE_BRACKET = ']';
	var numberOfParenthesisOrBracketOpened = 0;
	
	for (var i = 0; i < s.length; i++) {
		var currentChar = s[i];
		var memory = [];
		for (var j = i; j < s.length; j++) {
			var tempChar = s[j];
			var openBracket = tempChar == OPEN_BRACKET;
			var openParenthesis = tempChar === OPEN_PARENTHESIS;
			var closeParenthesis = tempChar === CLOSE_PARENTHESIS;
			var closeBracket = tempChar === CLOSE_BRACKET;
			if (openBracket || openParenthesis) {
				memory.push(tempChar);
				numberOfParenthesisOrBracketOpened++;
			}
			else if (	(closeParenthesis || closeBracket) &&
						memory.length > 0) {
				while((lastOpenBracketOrParenthesis = memory.pop()) !== undefined){
					if (lastOpenBracketOrParenthesis == OPEN_BRACKET &&
						tempChar === CLOSE_BRACKET) {
							j++;
							tempChar = s[j];
							numberOfParenthesisOrBracketOpened--;
							continue;
					}
					else if (lastOpenBracketOrParenthesis == OPEN_PARENTHESIS &&
							tempChar === CLOSE_PARENTHESIS) {
							j++;
							tempChar = s[j];
							numberOfParenthesisOrBracketOpened--;
							continue;
					}
					else {
						return false;
					}
				}
				if (s[j++] === undefined)
					return true;
				else
					return false;
			} else {
				return false;
			}
		}
	}
    return numberOfParenthesisOrBracketOpened === 0 ? true : false;
};