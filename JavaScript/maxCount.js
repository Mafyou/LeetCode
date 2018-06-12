/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    for(var i = 0; i < ops.length; i++) {
        m = Math.min(m, ops[i][0]);
        n = Math.min(n, ops[i][1]);
    }
    return m * n;
};

console.log(maxCount(3, 3, [[2,2],[3,3]]));