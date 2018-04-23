/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = 0;
    var temp = null;
    nums.forEach(function (element, index) {
        if (temp !== null) {
            var isThereDuplicates = temp === element;
            if (!isThereDuplicates) {
                var indexToPlace = len - 1;
                nums[indexToPlace] = temp;
                len++;
            }
        }
        else {
            len++;
        }
        temp = element;
        if (index === (nums.length - 1)) {
            nums[len - 1] = nums[nums.length - 1];
        }
    });
    return len;
};

var startRemoveDupliates = function(nums) {
    console.log("*********");
    console.log(nums);
    // nums is passed in by reference. (i.e., without making a copy)
    var len = removeDuplicates(nums);
    console.log("len array: " + len);
    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    console.log(nums);
    console.log("*********");
}
var nums = [1]; // 1
startRemoveDupliates(nums);
var nums = [1, 2]; // 1,2
startRemoveDupliates(nums);
var nums = [1,1,2]; // 2
startRemoveDupliates(nums);
var nums = [0,0,1,1,1,2,2,3,3,4]; // 5
startRemoveDupliates(nums);