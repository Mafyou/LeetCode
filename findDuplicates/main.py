class Solution:
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res = set()
        for num in nums:
            count = nums.count(num)
            if count == 2:
                res.add(num)
                nums.remove(num)
        return list(res)

toto = Solution()
print(toto.findDuplicates([4,3,2,7,8,2,3,1]))