class Solution(object):
    def powerfulIntegers(self, x, y, bound):
        """
        :type x: int
        :type y: int
        :type bound: int
        :rtype: List[int]
        """
        def Powers(k):
            if k <= 1:
                yield k
                return
            r = 1
            while r <= bound:
                yield r
                r *= k
        xx = set(Powers(x))
        yy = set(Powers(y))
        xxyy  = set(i+j for i in xx for j in yy if i+j <= bound)
        return sorted(xxyy)

toto = Solution()
print(toto.powerfulIntegers(2, 3, 10)) #[2,3,4,5,7,9,10]
print(toto.powerfulIntegers(3, 5, 15)) #[2,4,6,8,10,14]