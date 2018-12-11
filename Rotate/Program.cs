using System;

namespace Rotate
{
    class Program
    {
        private void Reverse(int[] nums, int start, int end)
        {
            while (start < end)
            {
                int temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
                end--;
            }
        }

        public void Rotate(ref int[] nums, int k)
        {
            Reverse(nums, 0, nums.Length - 1);
            Reverse(nums, 0, k - 1);
            Reverse(nums, k, nums.Length - 1);
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
            int k = 3;
            p.Rotate(ref nums, k);
            foreach (int num in nums)
            {
                Console.Write(num + ",");
            }

            Console.ReadLine();
        }
    }
}