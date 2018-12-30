class Solution:
    def customSortString(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: str
        """
        tmp = ""
        reverse = False
        result = ""
        for ch in S:
            if tmp == "":
                tmp = ch
            else:
                if tmp > ch:
                    reverse = True
                    break
        if reverse == True:
            idx = 0
            while idx < len(T):
                result += T[len(T) - idx - 1]
                idx += 1
        return result

toto = Solution()
toto.customSortString("cba", "abcd") #cbad
toto.customSortString("kqep","pekeq") #kqeep