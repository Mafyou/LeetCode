/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    return n === 1 ? 1 : 2 * (1 + n / 2 - lastRemaining(n / 2));
};

console.log(lastRemaining(9));