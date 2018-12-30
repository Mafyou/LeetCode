class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) == 0:
            return 0
        m = 0
        idx = 0
        
        while idx < len(s)-m:
            substring = ''
            u = idx
            while u < len(s) and s[u] not in substring :
                substring += s[u]
                u += 1
            m = max(len(substring),m)
            
            idx += 1
            
        return m

toto = Solution()
print(toto.lengthOfLongestSubstring("pwwkew"))