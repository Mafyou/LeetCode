/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let matrix = [];
    for(let i = m; i > 0; i--) {
        let myArray = [];
        for(var j = 0; j < n; j++) {
            myArray.push(0);
        }
        matrix.push(myArray);
    }

    for (let i = 0; i < ops.length; i++) {
        let currentOp = ops[i];
        for (let j = 0; j < currentOp[i]; j++) {
            let op = currentOp[i];
            for(let k = 0; k < op; k++) {
                matrix[j][k]++;
            }
        }
    }
    return matrix;
};

console.log(maxCount(3, 3, [[2,2],[3,3]]));