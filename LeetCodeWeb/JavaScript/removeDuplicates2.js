/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    function recurse(nums, oldElement, index) {
        var currentElement = nums[index];
        var len = nums.length;
        var isLimitArray = typeof currentElement === 'undefined' && typeof element === 'undefined';
        if (currentElement === oldElement && !isLimitArray) {
            nums.splice(index, 1);
            recurse(nums, oldElement, index);
        }
        var isMaximumLen = index > (nums.length - 1);
        if (isMaximumLen && isLimitArray) {
            return nums.length;
        }
        recurse(nums, nums[index++], index++);
    }
    return recurse(nums, nums[0], 1);
};

var startRemoveDupliates = function(nums) {
    console.log("***********");
    console.log(nums);
    // nums is passed in by reference. (i.e., without making a copy)
    var len = removeDuplicates(nums);
    console.log("len array: " + nums.length);
    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    console.log(nums);
    console.log("***********");
};
var nums = [1]; // 1
startRemoveDupliates(nums);
nums = [1, 2]; // 1,2
startRemoveDupliates(nums);
nums = [1,1,2]; // 1, 2
startRemoveDupliates(nums);
nums = [0,0,1,1,1,2,2,3,3,4]; // 5
startRemoveDupliates(nums);