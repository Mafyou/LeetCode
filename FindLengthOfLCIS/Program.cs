using System;

namespace FindLengthOfLCIS
{
    class Program
    {
        public int FindLengthOfLCIS(int[] nums)
        {
            int count = 1;
            int res = 0;
            for (int i = 0; i < nums.Length; i++)
            {
                if (i > 0 && nums[i] > nums[i - 1])
                {
                    count++;
                }
                else
                {
                    count = 1;
                }
                if (count > res) res = count;
            }
            return res;
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            //int[] param = new int [] { 1, 3, 5, 4, 7 };
            //int[] param = new int[] { 2, 2, 2, 2, 2 };
            int[] param = new int[] { 1, 3, 5, 7 };
            int res = p.FindLengthOfLCIS(param);
            Console.WriteLine(res);
            Console.ReadLine();
        }
    }
}