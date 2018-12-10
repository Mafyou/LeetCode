/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var re = /(\(\))/g;
	
    return s.match(re) ? true : false;
};