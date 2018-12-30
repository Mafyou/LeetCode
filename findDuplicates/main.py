class Solution:
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        no_duplicates = []
        duplicates = []
        for num in nums:
            if num in no_duplicates:
                duplicates.append(num)
            else:
                no_duplicates.append(num)
        return duplicates

toto = Solution()
toto.findDuplicates([4,3,2,7,8,2,3,1])