class Solution:
    def singleNonDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        tmpNums = nums
        for num in nums:
            tmpNums.remove(num)
            print(tmpNums)
            if num not in tmpNums:
                return num

toto = Solution()
print(toto.singleNonDuplicate([1,1,2,3,3,4,4,8,8]))