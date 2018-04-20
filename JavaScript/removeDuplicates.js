/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var arrayWithoutDuplicates = [];
    nums.forEach(function (element, index) {
        var isThereDuplicates = arrayWithoutDuplicates.indexOf(element) !== -1;
        if (!isThereDuplicates) {
            arrayWithoutDuplicates.push(element);
        }
    });
    nums.splice(0, nums.length);
    arrayWithoutDuplicates.forEach(function(element) {
        nums.push(element);
    });
    return nums.length;
};

var startRemoveDupliates = function(nums) {
    // nums is passed in by reference. (i.e., without making a copy)
    var len = removeDuplicates(nums);
    console.log("len array: " + len);
    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    console.log(nums);
}
var nums = [1]; // 1
startRemoveDupliates(nums);
var nums = [1, 2]; // 1,2
startRemoveDupliates(nums);
var nums = [1,1,2]; // 2
startRemoveDupliates(nums);
var nums = [0,0,1,1,1,2,2,3,3,4]; // 5
startRemoveDupliates(nums);