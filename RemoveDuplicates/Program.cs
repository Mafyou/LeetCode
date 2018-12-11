using System;

namespace RemoveDuplicates
{
    class Program
    {
        public int RemoveDuplicates(ref int[] nums)
        {
            if (nums.Length == 0) return 0;
            int i = 0;
            for (int j = 1; j < nums.Length; j++)
            {
                bool isDifferentThan = nums[j] != nums[i];
                if (!isDifferentThan) continue;
                i++;
                nums[i] = nums[j];
            }
            return i + 1;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(1 > 0);
            Program p = new Program();
            int[] nums = {1, 1, 2};
            //int[] nums = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
            int len = p.RemoveDuplicates(ref nums);
            Console.WriteLine("len: " + len);
            foreach (int num in nums)
            {
                Console.Write(num + ", ");
            }

            Console.ReadLine();
        }
    }
}