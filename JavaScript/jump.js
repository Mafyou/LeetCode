/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = last = cur = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > last) {
            last = cur;
            step++;
            if (last >= nums.length) return step;
        }
        cur = Math.max(cur, i + nums[i]);
    }
    return step;
};
console.log(jump([2, 3, 1, 1, 4]));