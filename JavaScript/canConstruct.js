/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length === "") return true;
    if (magazine.length === "") return false;

    for(let i = 0; i < magazine.length; i++) {
        for (let j = 0; j < ransomNote.length; j++) {
            if (magazine.charAt(i) === ransomNote.charAt(j)) {
                ransomNote = ransomNote.replace(ransomNote.charAt(j), "");
                break;
            }
        }
    }
    return ransomNote === "";
};
console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))