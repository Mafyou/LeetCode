function twoSum(nums, target) {
	var pushedArray = [];
	for (var firstIndex = 0; firstIndex < nums.length; firstIndex++) {
		var firstOne = nums[firstIndex];
		for(var secondIndex = 1; secondIndex < nums.length; secondIndex++) {
			if (firstIndex === secondIndex) continue;
			var secondOne = nums[secondIndex];
			var sum = firstOne + secondOne;
			if (sum === target) {
				pushedArray.push(firstIndex);
				pushedArray.push(secondIndex);
				break;
			}
		}
		if (pushedArray.length === 2) break;
	}
	return pushedArray;
};
