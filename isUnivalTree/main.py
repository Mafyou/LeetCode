# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        vals = []
        def selfi(root):
            if root:
                vals.append(root.val)
                selfi(root.left)
                selfi(root.right)
            return vals
        return len(set(selfi(root))) == 1

head = TreeNode(1)
head.left = TreeNode(1)
head.right = TreeNode(2)
toto = Solution()
print(toto.isUnivalTree(head))
