class Solution:
    def repeatedNTimes(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        for item in A:
            if A.count(item) > 1:
                return item
        

toto = Solution()
toto.repeatedNTimes([1,2,3,3])
toto.repeatedNTimes([2,1,2,5,3,2])
toto.repeatedNTimes([5,1,5,2,5,3,5,4])
toto.repeatedNTimes([8,3,2,3])