var Calc = function(n) {
    let num = n.toString();
    let len = num.length;
    let buffer = [];
    let res = 0;
    for (let i = 0; i < len; i += 1) {
        buffer.push(+num.charAt(i));
    }
    for (let i = 0; i < buffer.length; i++){
        res += Math.pow(buffer[i], 2);
    }
    return res;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var res = Calc(n);
    while (res != 1) {
        res = Calc(n);
        console.log(n);
    }
    return true;
};

console.log(isHappy(19));

//file:///C:/Users/Mafyou/Source/Repos/LeetCode/JavaScript/index.html