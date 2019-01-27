class Solution:
    def strWithout3a3b(self, A, B):
        """
        :type A: int
        :type B: int
        :rtype: str
        """
        answer = ''
        sb = sa = 0
        while A > 0 or B > 0:
            if (A > B or sb == 2) and not sa == 2:
                A -= 1
                sa += 1
                sb = 0
                answer += 'a'
            else:
                B -= 1
                sa = 0
                sb += 1
                answer += 'b'
        return answer

toto = Solution()
ret = toto.strWithout3a3b(4, 2)
print(ret)