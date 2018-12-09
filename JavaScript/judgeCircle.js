// R (right), L (left), U (up), and D (down)

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let tab = 0;
    for(let i = 0; i < moves.length; i++) {
        let move = moves[i];
        if (move === 'U') {
            tab += 2;
        } else if (move === 'D') {
            tab -= 2;
        } else if (move === 'L') {
            tab -= 1;
        } else if (move === 'R') {
            tab += 1;
        }
    }
    return tab === 0;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));