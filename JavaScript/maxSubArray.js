/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 0) return 0;
    let curMax = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        console.log("curMax: " + curMax);
        console.log("max: " + max);
        console.log("nums[i]: " + nums[i]);
        curMax = Math.max(curMax + nums[i], nums[i]);
        max = Math.max(curMax, max);
        console.log("curMax: " + curMax);
        console.log("max: " + max);
        console.log("nums[i]: " + nums[i]);
        console.log("*******");
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
//[4,-1,2,1] has the largest sum = 6.