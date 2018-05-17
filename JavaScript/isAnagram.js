/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var match = 0;
    for(var i = 0; i < s.length; i++) {
        for(var j = 0; j < t.length; j++) {
            if (s[i] === t[j] && t[j] !== '*') {
                match++;
                t = t.replace(t[j], '*');
                break;
            }
        }
    }
    return s.length === match && s.length === t.length;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("aacc", "ccac"));