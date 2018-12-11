using System;

namespace ContainsNearbyDuplicate
{
    class Program
    {
        public bool ContainsNearbyDuplicate(int[] nums, int k)
        {
            int max = 0;
            int min = 0;
            foreach (int num in nums)
            {
                if (max < num) max = num;
                if (min > num) min = num;
            }

            int interval = max - min;
            return k >= interval;
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            //int[] nums = {1, 2, 3, 1};
            //int[] nums = { 1, 0, 1, 1 };
            int[] nums = { 1, 2, 3, 1, 2, 3 };
            //int k = 3;
            int k = 2;

            Console.WriteLine(p.ContainsNearbyDuplicate(nums, k));
            Console.ReadLine();
        }
    }
}