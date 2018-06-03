/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let reverse = "";
    for(let i = 0; i < s.length; i++) {
        reverse += s[s.length - i - 1];
    }
    return reverse;
};

console.log(reverseString("hello"));