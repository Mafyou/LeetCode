class Solution:
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []
        idxRoot = 0
        while idxRoot < len(numbers):
            idx = idxRoot + 1
            while idx < len(numbers):
                if (numbers[idxRoot] + numbers[idx] == target):
                    result.append(idxRoot + 1)
                    result.append(idx + 1)
                    return result
                idx += 1
            idxRoot += 1
toto = Solution()
print(toto.twoSum([2,7,11,15], 9))
print(toto.twoSum([2,3,4], 6))
print(toto.twoSum([-1,0], -1))>
print(toto.twoSum([0,0,3,4], 0))
print(toto.twoSum([5,25,75], 100))
""https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/