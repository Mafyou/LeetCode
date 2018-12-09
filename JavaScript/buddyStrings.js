/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A == null || B == null) {
        return false;
    }
    let alen = A.length;
    let blen = B.length;
    
    if (alen != blen) {
        return false;
    }
    if (alen == 0) {
        return false;
    }
    
    let idx = [];
    let ipos = 0;
    for (let i = 0; i < alen; i++) {
        if (A.charAt(i) !== B.charAt(i)) {
            if (ipos === 2) {
                return false;
            }
            idx[ipos++] = i;
        }
    }
    
    if (ipos === 1) {
        return false;
    } 
    
    if (ipos === 0) {
        let cnts = [];
        for (let c of A) {
            cnts[c - 'a']++;
            if (cnts[c - 'a'] > 1) {
                return true;
            }
        }
        return false;
    }
    
    
    let i1 = idx[0];
    let i2 = idx[1];
    if (A.charAt(i1) == B.charAt(i2) && A.charAt(i2) == B.charAt(i1)) {
        return true;
    }
    return false;
};

console.log(buddyStrings("ab", "ba")); // true
console.log(buddyStrings("ab", "ab")); // false
console.log(buddyStrings("aa", "aa")); // true
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb")); // true
console.log(buddyStrings("", "aa")); // false