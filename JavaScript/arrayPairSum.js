/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sortedNums = nums.sort(function (itemA, itemB) {
        if (itemA > itemB) {
            return 1;
        }
        else if ( itemA < itemB){
            return  -1;
        }
        return 0;
    });
    let result = 0;
    for (let i = 0; i < nums.length; i += 2) {
        result += Math.min(nums[i], nums[i + 1]);
    }
    return result;
};

console.log(arrayPairSum([1,4,3,2])); // 4