/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    if (S === null || T === null || S.length === 0 || T.length === 0) return false;
    return Get(S) === Get(T);
};

var Get = function(sentence) {
    let result = "";
    for(let i = 0; i < sentence.length; i++) {
        if (sentence[i] === '#') {
            if (result.length > 0) {
                result = result.substr(0, result.length - 1);
            }
        }
        else {
            result += sentence[i];
        }
    }
    console.log(result);
    return result;
};

console.log(backspaceCompare("ab#c", "ad#c")); // true = ac
console.log(backspaceCompare("ab##", "c#d#")); // true = ""
console.log(backspaceCompare("a##c", "#a#c")); // true = c
console.log(backspaceCompare("a#c", "b")); // false = c & b