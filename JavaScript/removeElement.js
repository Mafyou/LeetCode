/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var found = nums.find(function (elm) {
		return elm === val;
	});
	if (typeof found === "undefined") {
		return nums.length;
	}
	var res = nums.splice(nums.indexOf(found), 1);
	
	removeElement(nums, val);
	return nums.length;
};

console.log("return: " + removeElement([3,2,2,3], 3) + " should return 2"); // 2
console.log("return: " + removeElement([0,1,2,2,3,0,4,2], 2) + " should return 5"); // 5
console.log("return: " + removeElement([9,10], 7) + " should return 2"); // 2