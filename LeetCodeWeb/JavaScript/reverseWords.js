/**
 * @param {string} str
 * @returns {string}
 */
function myTrim(x) {
    return x.replace(/\s\s+/g, ' ');
}

var reverseWords = function(str) {
    str = myTrim(str).trim().split(' ').reverse().join(' ');
    
    return str;
};
console.log("|" + reverseWords("    ") + "|");
console.log(reverseWords("the sky is blue"));
console.log("|" + reverseWords("  a   b  ") + "|");


/*
Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
*/