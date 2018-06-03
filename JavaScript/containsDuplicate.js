/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let st = [];
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < st.length; j++) {
            if (st[j] === nums[i]) {
                return true;
            }
        }
        st.push(nums[i]);
    }
    return result;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,23,3,4,3,2,4,2]));