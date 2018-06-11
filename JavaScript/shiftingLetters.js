/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    let res = "";
    let realShifts = [];
    for (let i = 0; i < shifts.length; i++) {
        let currentShift = shifts[i];
        realShifts.push(currentShift > 26 ? currentShift % 26 : currentShift);
    }
    for (let i = 0; i < S.length; i++) {
        let currentShiftedLetter = "";
        let currentLetter = S[i];
        for (let j = i; j < realShifts.length; j++) {
            let currentShift = realShifts[j];
            if (currentShiftedLetter === "") {
                currentShiftedLetter = currentLetter;
            }
            let positionInAlpha = currentShiftedLetter.charCodeAt(currentShiftedLetter) + currentShift;
            currentShiftedLetter = positionInAlpha > 122 ?
                String.fromCharCode(currentShiftedLetter.charCodeAt(currentShiftedLetter) + currentShift - 26) :
                currentShiftedLetter = String.fromCharCode(currentShiftedLetter.charCodeAt(currentShiftedLetter) + currentShift)
        }
        res += currentShiftedLetter;
    }
    return res;
};

console.log(shiftingLetters("abz", [3, 5, 9])); // rpl
console.log(shiftingLetters("bad", [10,20,30])); // jyh
console.log(shiftingLetters("xrdofd", [70,41,71,72,73,84])); // surjgj