/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
        let currentArray = A[i];
        let pushArray = [];
        for (let j = 0; j < currentArray.length; j++) {
            let revertIndex = currentArray[currentArray.length - j - 1];
            pushArray.push(revertIndex === 1 ? 0 : 1);
        }
        arr.push(pushArray);
    }
    return arr;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); //[[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])); //[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]