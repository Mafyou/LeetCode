/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [];
    let n = s.length;
    let longest = 0;

    for(let i = 0; i < n; i++) {
        if (s.charAt(i) == '(') stack.push(i);
        else if (s.charAt(i) === ')' && stack.length !== 0 && s.charAt(stack[stack.length - 1]) === '(') stack.pop();
        else stack.push(i);
    }
    if (stack.length === 0) return n;
    let a = n, b = 0;
    while (stack.length !== 0) {
        b = stack.pop();
        longest = Math.max(longest, a - b - 1);
        a = b;
    }
    return Math.max(longest, a);
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));