/**
 * @param {number[]} nums
 * @return {number}
 */
var sortNumber = function (a,b) {
    return a - b;
}


var missingNumber = function(nums) {
    nums.sort(sortNumber);
    let i = 0;
    for (i; i <= nums.length; i++) {
        if (i !== nums[i]) return i;
    }
    return i;
};

console.log(missingNumber([0]));
console.log(missingNumber([1]));
console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));