class Solution(object):
    def buddyStrings(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: bool
        """
        if len(A) != len(B): return False
        if A == B:
            seen = set()
            for a in A:
                if a in seen:
                    return True
                seen.add(a)
            return False
        else:
            pairs = []
            for a, b in zip(A, B):
                if a != b:
                    pairs.append((a, b))
                if len(pairs) >= 3: return False
            return len(pairs) == 2 and pairs[0] == pairs[1][::-1]

toto = Solution()
toto.buddyStrings("ab", "ba") # true
toto.buddyStrings("ab", "ab") # false
toto.buddyStrings("aa", "aa") # true
toto.buddyStrings("", "aa") # false
toto.buddyStrings("aaaaaaabc", "aaaaaaacb") # true
toto.buddyStrings("abab", "abab") #true