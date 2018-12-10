/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let currentNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
         if (currentNum === (nums[i] + 1)) {
             currentNum = nums[i];
         }
         else {
             return false;
         }
    }
    return true;
};

console.log(checkPossibility([4,2,3])); // True
console.log(checkPossibility([4,2,1])); // False
console.log(checkPossibility([4,3,2])); // False