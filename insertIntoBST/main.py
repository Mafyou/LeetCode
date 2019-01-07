# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def insertIntoBST(self, node, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        def dfs(node, val):
            current_val = node.val
            if current_val > val:
                if node.left is None:
                    node.left = TreeNode(val)
                    return node
                else: dfs(node.left, val)
            else:
                if node.right is None:
                    node.right = TreeNode(val)
                    return node
                else: dfs(node.right, val)
            return node
        return dfs(root, val)

root = TreeNode(4)
root.left = TreeNode(2)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right = TreeNode(7)
toto = Solution()
print(toto.insertIntoBST(root, 5).val)