class Solution:
    def powerfulIntegers(self, x, y, bound):
        """
        :type x: int
        :type y: int
        :type bound: int
        :rtype: List[int]
        """
        if x > y : x, y = y, x
        if y == 1: return [2] if 2 <= bound else []
        if x == 1:
            res = []
            val = 1
            while 1 + val <= bound:
                res.append(1 + val)
                val *= y
            return res
        res = set()
        a = 1
        while a <= bound:
            b = 1
            while a + b <= bound:
                res.add(a + b)
                b *= y
            a *= x
        return list(res)
        

toto = Solution()
print(toto.powerfulIntegers(2, 3, 10)) #[2,3,4,5,7,9,10]
print(toto.powerfulIntegers(3, 5, 15)) #[2,4,6,8,10,14]