class Solution:
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        answer = dict()
        for domain in cpdomains:
            count, domain = domain.split()
            count = int(count)
            frags = domain.split('.')
            for index in range(len(frags)):
                virgin_count = 0
                key = ".".join(frags[index:])
                if key in answer: virgin_count = answer[key]
                answer[key] = count + virgin_count
        return ["{} {}".format(dom,ct) for ct,dom in answer.items()]

toto = Solution()
toto.subdomainVisits(["9001 discuss.leetcode.com"])
toto.subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])