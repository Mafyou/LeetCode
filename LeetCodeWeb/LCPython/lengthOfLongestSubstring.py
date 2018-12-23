class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = []
        idx = 0
        while idx < len(s):
            print(idx)
            subResult = ""
            for letter in s[idx:]:
                if letter not in subResult:
                    print("if satisfied")
                    subResult += letter
                    if idx == len(s) - 1:
                        idx += 1
                else:
                    print("if not satisfied")
                    result.append(subResult)
                    idx += 1
                    break
        m = 0
        for res in result:
            m = max(len(res), m)
        return m

toto = Solution()
print(toto.lengthOfLongestSubstring("pwwkew"))