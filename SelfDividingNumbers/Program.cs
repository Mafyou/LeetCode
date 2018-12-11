namespace SelfDividingNumbers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Program
    {
        static void Main(string[] args)
        {
            int left = 1;
            int right = 22;
            IList<int> res = new List<int>(right - left);

            for (int index = left; index <= right; index++)
            {
                string inputS = index.ToString();
                bool canBeDividedByImSelft = true;
                List<int> inputArray = new List<int>(inputS.Select(x => int.Parse(x.ToString())));
                foreach (int digit in inputArray)
                {
                    if (digit == 0 || index % digit != 0)
                    {
                        canBeDividedByImSelft = false;
                    }
                }
                if (canBeDividedByImSelft) res.Add(index);
            }

            foreach (int item in res)
            {
                Console.Write(item + ",");
            }

            Console.ReadLine();
        }
    }
}