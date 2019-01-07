namespace MergeTrees
{
    public class TreeNode
    {
        public int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int x)
        {
            this.val = x;
        }
    }
    class Program
    {
        static TreeNode MergeTrees(TreeNode t1, TreeNode t2)
        {
            if (t1 == null) return t2;
            if (t2 == null) return t1;
            t1.val += t2.val;
            t1.left = MergeTrees(t1.left, t2.left);
            t2.right = MergeTrees(t1.right, t2.right);
            return t1;
        }
        static void Main(string[] args)
        {
            TreeNode t1 = new TreeNode(1)
                          {
                              left = new TreeNode(3) {left = new TreeNode(5)},
                              right = new TreeNode(2)
                          };

            TreeNode t2 = new TreeNode(2)
                          {
                              left = new TreeNode(1) {right = new TreeNode(4)},
                              right = new TreeNode(3) {right = new TreeNode(7)}
                          };
            TreeNode rts = MergeTrees(t1, t2);
        }
    }
}