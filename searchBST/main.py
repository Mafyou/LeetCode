# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def searchBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        def selfi(node, val):
            if node and node.val == val:
                return node
            else:
                if node and node.left:
                    return selfi(node.left, val)
                if node and node.right:
                    return selfi(node.right, val)
            return None
        return selfi(root, val)

root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
toto = Solution()
print(toto.searchBST(root,2).left.val)