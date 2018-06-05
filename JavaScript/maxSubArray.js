/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 0) return 0;
    let curMax = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        let res = curMax + nums[i];
        console.log("curMax & num[i]: " + res + " nums[i]: " + nums[i])
        curMax = Math.max(res, nums[i]);
        console.log("curMax: " + curMax + " max: " + max);
        max = Math.max(curMax, max);
        console.log("*******");
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
//[4,-1,2,1] has the largest sum = 6.