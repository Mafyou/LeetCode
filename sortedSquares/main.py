import math
class Solution:
    def sortedSquares(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        answer = []
        for num in A:
            answer.append(round(math.pow(num, 2)))
        return sorted(answer)

toto = Solution()
toto.sortedSquares([-4,-1,0,3,10]) #[0,1,9,16,100]
toto.sortedSquares([-7,-3,2,3,11]) #[4,9,9,49,121]