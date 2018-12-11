using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RangeSumBST
{
    class Program
    {
        //Definition for a binary tree node.
        public class TreeNode
        {
            public int val;
            public TreeNode left;
            public TreeNode right;

            public TreeNode(int x)
            {
                val = x;
            }
        }


        private int answer = 0;
        public void Circle(TreeNode node, int L, int R)
        {
            if (node != null)
            {
                if (L <= node.val && node.val <= R)
                    answer += node.val;
                if (L < node.val)
                    Circle(node.left, L, R);
                if (node.val < R)
                    Circle(node.right, L, R);
            }
        }

        public int RangeSumBST(TreeNode root, int L, int R)
        {
            answer = 0;
            Circle(root, L, R);
            return answer;
        }

        static void Main(string[] args)
        {
            //Input:
            //root =  [10, 5, 15, 3, 7, null, 18], L = 7, R = 15
            //Output:
            //32
            //Input:
            //root =  [10, 5, 15, 3, 7, 13, 18, 1, null, 6], L = 6, R = 10
            //Output:
            //23
            TreeNode root = new TreeNode(10)
                            {
                                left = new TreeNode(5),
                                right = new TreeNode(15)
                                {
                                           left = new TreeNode(15)
                                                  {
                                                      left = new TreeNode(3)
                                                             {
                                                                 left = new TreeNode(7)
                                                                        {
                                                                            left
                                                                                = new
                                                                                  TreeNode(0)
                                                                                  {
                                                                                      left
                                                                                          = new
                                                                                              TreeNode(18)
                                                                                  }
                                                                        }
                                                             }
                                                  }
                                       }
                            };
            Program p = new Program();
            int L = 7;
            int R = 15;
            Console.WriteLine(p.RangeSumBST(root, L, R));
            Console.ReadLine();
        }
    }
}
